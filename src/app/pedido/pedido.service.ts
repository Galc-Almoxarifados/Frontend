import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoProfessor } from '../pedidos-professor/pedidosProfessor';


@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  apiUrl = "/api/Agendamento"

  constructor(private httpClient: HttpClient) { }




   getAll(){
    return this.httpClient.get<PedidoProfessor[]>(this.apiUrl + '/GetAllAgendamento');
  }
}
