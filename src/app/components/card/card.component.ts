import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
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

  prioridad = '';
  openModal = false;

  ngOnInit(): void {

    this.prioridad = this.searchInfo.card.prioridad;

  }

  updateCard(){
    this.searchInfo
    this.openModal = true;
    console.log('searchInfo -> ',this.searchInfo);
  }
  closeModal(accion:boolean){
    console.log('closeModal -> ', accion);
  }
}
