import { Injectable } from '@angular/core';
import { ListModel } from '../models/list';
import { HttpClient } from '@angular/common/http';
import { CardModel } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class BoardManagementService {

  constructor(private http: HttpClient) { }

  getLists(): Promise<ListModel[]> {
    return this.http.get<ListModel[]>('http://localhost:8081/coplan-api/list').toPromise()
      .then(response => {
        console.log('Listas:', response);
        return response as ListModel[];
      }).catch(error => {
        console.error('Error al obtener las listas:', error);
        return Promise.reject(error);
      });
  }

  postList(list: ListModel): Promise<boolean> {

    // this.http.post('http://localhost:8081/coplan-api/setList', list).subscribe(response => {
    //   console.log('Lista agregada:', response);
    // });
    return this.http.post('http://localhost:8081/coplan-api/list', list).toPromise()
      .then(response => {
        console.log('Lista agregada:', response);
        return true;
      })
      .catch(error => {
        console.error('Error al agregar la lista:', error);
        return false;
      });
  }

  //----------------------------- CARD --------------------------------------------------------
  postCard(idList:number, nomCard?:string): Promise<boolean> {

    // this.http.post('http://localhost:8081/coplan-api/setList', list).subscribe(response => {
    //   console.log('Lista agregada:', response);
    // });
    const newCard = {
      idLista: idList
    }
    return this.http.post('http://localhost:8081/coplan-api/card', newCard).toPromise()
      .then(response => {
        console.log('Card agregada:', response);
        return true;
      })
      .catch(error => {
        console.error('Error al agregar la Card:', error);
        return false;
      });
  }
}
