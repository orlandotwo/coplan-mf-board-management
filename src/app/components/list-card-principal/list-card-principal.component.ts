import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ModalAddListComponent } from '../modal-add-list/modal-add-list.component';
import { ModalUpdateListComponent } from '../modal-update-list/modal-update-list.component';


import { BoardManagementService } from '../../services/board-management.service';
import { ListModel } from '../../models/list';



@Component({
  selector: 'app-list-card-principal',
  standalone: true,
  imports: [
    CardComponent,
    ModalAddListComponent,
    ModalUpdateListComponent
  ],
  templateUrl: './list-card-principal.component.html'
})
export class ListCardPrincipalComponent implements OnChanges{
  @Input() titleBoard: string = '';
  @Input() titleSearch: string = '';

  listLista:ListModel[] = [];
  listaListaBusqueda:ListModel[] = [];
  rotarListas:boolean = false;
  openModal:boolean = false;
  //openMenu:boolean = false;
  openModalConfigList: boolean = false;
  listToDelete: any = {};
  search:boolean = false;


  constructor(private httpService: BoardManagementService) {
    this.getList()
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['titleSearch'] && !changes['titleSearch'].isFirstChange()) {
      this.onSearch(this.titleSearch);
    }
  }
  getList(){
    this.httpService.getLists().then(response => {
      if (response) {
        this.listLista = response as ListModel[];
        console.log('Listas:', response);
      } else {
        alert('Error al cargar las listas');
      }
    }).catch(error => {
      alert('Error al cargar las listas');
    });
  }

  rotar(){
    this.rotarListas = !this.rotarListas
  }

  setOpenModal(accion:boolean,state: boolean = false){
    this.openModal = accion
    if(state){
      this.getList()

    }
    console.log(accion,state)
  }

  addCard(list: ListModel){
    console.log(list);

    this.httpService.postCard(Number(list.id)).then(response => {
      if (response) {
        console.log('Listas:', response);
        this.getList()
      } else {
        alert('Error al cargar las listas');
      }
    }).catch(error => {
      alert('Error al cargar las listas');
    });
  }
  openModalUpdateList(list:any){
    this.listToDelete = list;
    this.openModalConfigList = true
  }

  onSearch(tittle: string): void {
    console.log('list ',tittle)
    if(tittle && tittle.length > 0){
      //console.log('con info',tittle)
      const busqueda = this.listLista.filter(list => list.nombre.toLowerCase().includes(tittle.toLowerCase()));
      //console.log('busqueda',busqueda)
      this.listaListaBusqueda = busqueda;
      this.search = true;
    }else{
      //console.log('sin info')
      this.search = false;
      this.getList()
    }
  }
}
