import { Component, Input } from '@angular/core';

import { NavbarSecundariaComponent } from '../components/navbar-secundaria/navbar-secundaria.component';
import { ListCardPrincipalComponent } from '../components/list-card-principal/list-card-principal.component';

@Component({
  selector: 'app-board-management',
  standalone: true,
  imports: [
    NavbarSecundariaComponent,
    ListCardPrincipalComponent
  ],
  templateUrl: './board-management.component.html'
})
export class BoardManagementComponent{
  @Input() titleBoard: string = '';

  titleSearch: string = '';
}
