import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itens } from './itens';

@Injectable({
  providedIn: 'root'
})
export class ItensService {
  apiUrl = "/api/Itens"


  constructor(private httpClient: HttpClient) {

  }

  getAllItens(){
    return this.httpClient.get<Itens[]>(this.apiUrl + '/GetAllItens');
  }
  }
