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
  @Input() colorCard: string = '';
  @Input() searchInfo: any = { };

  prioridad = '';
  openModal = false;

  ngOnInit(): void {
    const prioridadMap: any = {
      yellow: 'Media',
      green: 'Baja',
      red: 'Alta',
    };
    this.prioridad = prioridadMap[this.colorCard] || 'Baja';

    // console.log('color card:', this.colorCard);
    // console.log('title card:', this.titleCard);
  }

  modificarPrioridad(){
    this.searchInfo
    this.openModal = true;
    console.log('searchInfo -> ',this.searchInfo);
  }
  closeModal(accion:boolean){
    console.log('closeModal -> ', accion);
  }
}
