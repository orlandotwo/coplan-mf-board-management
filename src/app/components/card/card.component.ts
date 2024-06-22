import { NgClass } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalUpdateCardComponent } from '../modal-update-card/modal-update-card.component';
import { FormsModule } from '@angular/forms';
import { CardModel } from '../../models/card';
import { BoardManagementService } from '../../services/board-management.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    ModalUpdateCardComponent,
    FormsModule
  ],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() searchInfo: any = {  };
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

  prioridad = '';
  openModal = false;

  constructor(private httpService: BoardManagementService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
//    this.prioridad = this.searchInfo.card.prioridad;
    //this.prioridad = this.card.prioridad;
    //console.log('iniciando card',this.searchInfo.card)
    this.prioridad = this.searchInfo.card.prioridad;
  }
  update(lala:boolean){
    window.location.reload();
    this.reload.emit(true);
    this.cdr.detectChanges();
  }
  deleteInitialCard(){
    this.searchInfo.card.inicial = false;
    console.log('Borrando card Inicial...')
    this.reload.emit(true);
  }
  createCard(){
    this.searchInfo.card.inicial = false;
    console.log('Creando card Inicial...', this.searchInfo)

    this.httpService.postCard(this.searchInfo.idList,this.searchInfo.card.nombre).then(response => {
      if (response) {
        console.log('se agrego card correctamente')
        console.log('Card :', response);
        this.reload.emit(true);
      } else {
        alert('Error al Agregar las Tarjeta');
      }
    }).catch(error => {
      alert('Error al Agregar las Tarjeta');
    });
  }
  // updateCard(){
  //   this.searchInfo
  //   this.openModal = true;
  //   console.log('searchInfo -> ',this.searchInfo);
  // }
  // closeModal(accion:boolean){
  //   console.log('closeModal -> ', accion);
  //   this.reload.emit(accion);
  // }
}
