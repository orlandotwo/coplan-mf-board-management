import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoardManagementService } from '../../services/board-management.service';
import { FormsModule } from '@angular/forms';
import { ListModel } from '../../models/list';

@Component({
  selector: 'app-modal-add-list',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './modal-add-list.component.html'
})
export class ModalAddListComponent {
  @Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

  openModal:any;
  listTitle = '';
  listName = '';

  constructor(private httpService: BoardManagementService){  }


  addList(nombre:string){

    if (nombre.trim() === '') {
      //console.log('error')
      alert('El nombre de la lista no puede estar vacio');
      return;
    }

    if (/[^\w\s]/.test(nombre)) {
      //console.log('error con simbolos raros')
      alert('Oiga! El nombre de la lista no puede tener simbolos raros');
      return;
    }

    const mewList: ListModel = {
      nombre: nombre
    }

    this.httpService.postList(mewList).then(response => {
      if (response) {
        this.setOpenModal(false, true);
      } else {
        alert('Error al agregar la lista');
      }
    }).catch(error => {
      alert('Error al agregar la lista');
    });

  }

  setOpenModal(acction:boolean, state: boolean = false){
    this.openModal = {
      acction: acction,
      state: state
    };
    this.closeModal.emit(this.openModal);
  }
}
