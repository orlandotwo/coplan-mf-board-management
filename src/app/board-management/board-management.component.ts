import { Component, Input } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { BoardManagementService } from '../services/board-management.service';
import { ListModel } from '../models/list';
import { ModalAddListComponent } from '../components/modal-add-list/modal-add-list.component';
import { ModalUpdateListComponent } from '../components/modal-update-list/modal-update-list.component';
import { NavbarSecundariaComponent } from '../components/navbar-secundaria/navbar-secundaria.component';
import { ListCardPrincipalComponent } from '../components/list-card-principal/list-card-principal.component';

@Component({
  selector: 'app-board-management',
  standalone: true,
  imports: [
    NavbarSecundariaComponent,
    ListCardPrincipalComponent,
    CardComponent,
    ModalAddListComponent,
    ModalUpdateListComponent
  ],
  templateUrl: './board-management.component.html'
})
export class BoardManagementComponent {
  @Input() titleBoard: string = '';

  titleSearch: string = '';

  // listLista:ListModel[] = [];
  // listaListaBusqueda:ListModel[] = [];
  // rotarListas:boolean = false;
  // openModal:boolean = false;
  // //openMenu:boolean = false;
  // openModalConfigList: boolean = false;
  // listToDelete: any = {};
  // search:string = '';


  constructor(private httpService: BoardManagementService) {
    //this.getList()
  }
  // getList(){
  //   this.httpService.getLists().then(response => {
  //     if (response) {
  //       this.listLista = response as ListModel[];
  //       console.log('Listas:', response);
  //     } else {
  //       alert('Error al cargar las listas');
  //     }
  //   }).catch(error => {
  //     alert('Error al cargar las listas');
  //   });
  // }

  // rotar(){
  //   this.rotarListas = !this.rotarListas
  // }

  // setOpenModal(accion:boolean,state: boolean = false){
  //   this.openModal = accion
  //   if(state){
  //     this.getList()

  //   }
  //   console.log(accion,state)
  // }

  // addCard(list: ListModel){
  //   console.log(list);

  //   this.httpService.postCard(Number(list.id)).then(response => {
  //     if (response) {
  //       console.log('Listas:', response);
  //       this.getList()
  //     } else {
  //       alert('Error al cargar las listas');
  //     }
  //   }).catch(error => {
  //     alert('Error al cargar las listas');
  //   });
  // }
  // openModalUpdateList(list:any){
  //   this.listToDelete = list;
  //   this.openModalConfigList = true
  // }

  // onSearch(event: any): void {
  //   console.log(event);
  //   this.search = event.target.value;
  //   if(this.search.length > 0){
  //     console.log('con info',this.search)
  //     const busqueda = this.listLista.filter(list => list.nombre.toLowerCase().includes(this.search.toLowerCase()));
  //     this.listaListaBusqueda = busqueda;
  //   }else{
  //     console.log('sin info')
  //     this.getList()
  //   }
  //   // const query = event.target.value;
  //   // if (query.length > 0) {
  //   //   this.cardService.searchLists(query).then(
  //   //     lists => {
  //   //       this.searchResults = lists;
  //   //     }
  //   //   ).catch(error => {
  //   //     console.error('Error al buscar las listas:', error);
  //   //   });
  //   // } else {
  //   //   this.searchResults = []; // Limpiar los resultados si no hay query
  //   // }
  // }
}
