import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardManagementService } from '../../services/board-management.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal-update-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './modal-update-card.component.html'
})
export class ModalUpdateCardComponent implements OnInit {
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() data: any = {};

  formCard: FormGroup = new FormGroup({});

  ocultarCampo= {
    nombre: false,
    prioridad: false,
    descripcion: false
  }

  constructor(
    private httpService: BoardManagementService,
    private _fb: FormBuilder){  }
    //private cdr: ChangeDetectorRef

  ngOnInit(): void {

    //if(this.data.card.descripcion === undefined || this.data.card.descripcion === ''){
    //   console.log('this.data.card.descipcion');
    //   this.data.card.descripcion = ''
    //   this.ocultarCampo.descripcion = true;
    // }
    this.formCard = this._fb.group({
      'nombre':    [String(this.data.card.nombre)],
      'prioridad': [String(this.data.card.prioridad)],
      'descripcion': this.data.card.descripcion === undefined ? '' : [String(this.data.card.descripcion)]
    })
  }

  // editar(){
  //   this.isEditing = true;
  //   this.cdr.detectChanges();
  // }

  // stopEditing() {
  //   this.isEditing = false;
  // }


  updateCard(){
    console.log(this.formCard)

    this.data.card.nombre = this.formCard.get('nombre')?.value;
    this.data.card.prioridad = this.formCard.get('prioridad')?.value;
    this.data.card.descripcion = this.formCard.get('descripcion')?.value;

    console.log(this.data);

    this.httpService.putCard(this.data).then(response => {
      if (response) {
        this.cerrarModal(false);
        this.reload.emit(true);
        console.log('Card Actualizada:', response);

      } else {
        alert('Error al agregar la lista');
      }
    }).catch(error => {
      alert('Error al agregar la lista');
    });

  }

  deleteCard(){
    let confirmDelete = window.confirm('¿Seguro que desea eliminar?');
    if (confirmDelete) {

      const auxIdList = this.data.idList;
      const auxIdCard = this.data.card.id;


      console.log('Card a eliminar', auxIdList, ' - ' ,auxIdCard);
      this.httpService.deleteCard(auxIdList, auxIdCard).then(response => {
        if (response) {
          this.cerrarModal(false);

        } else {
          alert('Error al Eliminar Card');
        }
      }).catch(error => {
        alert('Error al Eliminar Card');
      });
    }

  }

  cerrarModal(state: boolean = false){
    console.log('cerrarModal -> ', state);
    this.closeModal.emit(state);
  }


}
