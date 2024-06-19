import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() titleCard: string = '';
  @Input() colorCard: string = '';

  prioridad=''

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
}
