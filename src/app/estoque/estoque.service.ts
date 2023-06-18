import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  apiUrl = "/api/Itens"


  constructor(private httpClient: HttpClient) {

  }

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

