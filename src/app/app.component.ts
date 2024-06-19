import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSecundariaComponent } from './components/navbar-secundaria/navbar-secundaria.component';
import { BoardManagementService } from './services/board-management.service';
import { ModalAddListComponent } from './components/modal-add-list/modal-add-list.component';
import { ListModel } from './models/list';
import { BoardManagementComponent } from './board-management/board-management.component';

interface CardPrincipal{
  id: number;
  nombre: string;
}
interface Lista{
  id: number;
  nombre: string;
  //color: string;
  listCardPrincipal?: CardPrincipal[];

}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BoardManagementComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  titleBoard = 'Prueba';
}
