import { Component, Input } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { BoardManagementService } from '../services/board-management.service';
import { ListModel } from '../models/list';
import { ModalAddListComponent } from '../components/modal-add-list/modal-add-list.component';

@Component({
  selector: 'app-board-management',
  standalone: true,
  imports: [
    CardComponent,
    ModalAddListComponent
  ],
  templateUrl: './board-management.component.html'
})
export class BoardManagementComponent {
  @Input() titleBoard: string = '';

  listLista:ListModel[] = [];
  rotarListas:boolean = false;
  openModal:boolean = false;
  openMenu:boolean = false;

  constructor(private httpService: BoardManagementService) {
    this.getList()
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
}
