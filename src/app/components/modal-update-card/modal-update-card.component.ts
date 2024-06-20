import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoardManagementService } from '../../services/board-management.service';

@Component({
  selector: 'app-modal-update-card',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-update-card.component.html'
})
export class ModalUpdateCardComponent {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  openModal:any;
  listTitle = '';
  listName = '';

  constructor(private httpService: BoardManagementService){  }


  updateCard(nombre:string){

    // if (nombre.trim() === '') {
    //   //console.log('error')
    //   alert('El nombre de la lista no puede estar vacio');
    //   return;
    // }

    // if (/[^\w\s]/.test(nombre)) {
    //   //console.log('error con simbolos raros')
    //   alert('Oiga! El nombre de la lista no puede tener simbolos raros');
    //   return;
    // }

    // const mewList: ListModel = {
    //   nombre: nombre
    // }

    // this.httpService.postList(mewList).then(response => {
    //   if (response) {
    //     this.setOpenModal(false, true);
    //   } else {
    //     alert('Error al agregar la lista');
    //   }
    // }).catch(error => {
    //   alert('Error al agregar la lista');
    // });

  }

  cerrarModal(state: boolean = false){
    this.closeModal.emit(state);
  }
}
