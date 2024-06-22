import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalUpdateCardComponent } from '../modal-update-card/modal-update-card.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass,
    ModalUpdateCardComponent
  ],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() titleCard: string = '';
  @Input() searchInfo: any = { };
  @Output() reload: EventEmitter<boolean> = new EventEmitter<boolean>();

  prioridad = '';
  openModal = false;

  ngOnInit(): void {
    this.prioridad = this.searchInfo.card.prioridad;
  }
  llega(lala:boolean){
    console.log('llega', lala);
    this.reload.emit(lala);
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
