import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BoardManagementService } from '../../services/board-management.service';

@Component({
  selector: 'app-modal-update-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modal-update-list.component.html'
})
export class ModalUpdateListComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any = {};

  formList: FormGroup = new FormGroup({});
  ocultarCampo= {
    nombre: false
  };

  constructor(private _fb: FormBuilder, private httpService: BoardManagementService){}
  ngOnInit(): void {
    this.formList = this._fb.group({
      'nombre':  [String(this.data.nombre)]
    })
  }
  deleteList(){
    console.log('deleteList -> ', this.data);
    let confirmDelete = window.confirm(`¿Seguro que desea eliminar ${this.data.nombre}?`);
    if (confirmDelete) {
      const auxIdList = this.data.id;

      console.log('Lista a eliminar', auxIdList);
      this.httpService.deleteList(auxIdList).then(response => {
        if (response) {
          this.cerrarModal(false);
          this.reload.emit(true);
        } else {
          alert('Error al Eliminar Card');
        }
      }).catch(error => {
        alert('Error al Eliminar Card');
      });
    }
  }
  updateList(){
    const auxData = {
      id: this.data.id,
      nombre: this.formList.value.nombre
    }

    this.httpService.putList(auxData).then(response => {
      if (response) {
        this.cerrarModal(false);
        this.reload.emit(true);
      } else {
        alert('Error al Modificar la lista');
      }
    }).catch(error => {
      alert('Error al Modificar la lista');
    });
  }
  cerrarModal(state: boolean = false){
    console.log('cerrarModal -> ', state);
    this.closeModal.emit(state);
  }
}
