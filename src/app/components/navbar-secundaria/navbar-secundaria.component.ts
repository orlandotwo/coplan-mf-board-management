import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-navbar-secundaria',
  standalone: true,
  imports: [],
  templateUrl: './navbar-secundaria.component.html'
})
export class NavbarSecundariaComponent {
  @Input() titleBoard: string = '';
}
