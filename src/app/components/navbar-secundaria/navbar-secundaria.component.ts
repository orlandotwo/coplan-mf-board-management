import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-navbar-secundaria',
  standalone: true,
  imports: [],
  templateUrl: './navbar-secundaria.component.html'
})
export class NavbarSecundariaComponent {
  @Input() titleBoard: string = '';
  @Output() busqueda = new EventEmitter<string>();

  onSearch(event: any): void {
    this.busqueda.emit(event.target.value);
    console.log('nav',event.target.value);
    // this.search = event.target.value;
    // if(this.search.length > 0){
    //   console.log('con info',this.search)
    //   const busqueda = this.listLista.filter(list => list.nombre.toLowerCase().includes(this.search.toLowerCase()));
    //   this.listaListaBusqueda = busqueda;
    // }else{
    //   console.log('sin info')
    //   this.getList()
    // }
  }
}
