import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  apiUrl = "/api/Utilizadores"

  constructor(private httpClient: HttpClient) {
    
  }

  save(cadastro:Cadastro){
    
    return this.httpClient.post<Cadastro>(this.apiUrl + '/Registrar' ,cadastro);
   }
}
