
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  apiUrl = "/api/Itens"
  // const  URL=
  //   'http://localhost:5166/api/Itens/GetAllItens';


  constructor(private httpClient: HttpClient) {

  }
  // listar(): Observable<{ nome: string, qtItens: number, idAlmoxarife: number, idStatusItem: number,idTipodeItem: number }[]> {
  //   return this.httpClient
  //       .get<any[]>(this.URL)
  //       .pipe(
  //           map(dadosDaApi => {
  //               return dadosDaApi.map(a => {
  //                   return {
  //                       nome: a.nome
  //                   };
  //               });
  //           })
  //       );
  //   }

  save(item:Item){
   item.dcItem= new Date()
   item.daItem= new Date()
   return this.httpClient.post<Item>(this.apiUrl + '/RegistrarItem' ,item);
  }

  update(item:Item){
    return this.httpClient.put<Item>(this.apiUrl, item);
  }

  getAll(){
    return this.httpClient.get<Item[]>(this.apiUrl + '/GetAllItens');
  }

  delete(id:any){
    return this.httpClient.delete(this.apiUrl + '/'+ id);
  }

  }

