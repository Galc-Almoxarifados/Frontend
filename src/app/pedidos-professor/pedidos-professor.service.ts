
import { Pedido } from './../../../Front-TCC-atualizado/src/app/pedido/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoProfessor } from './pedidosProfessor';

@Injectable({
  providedIn: 'root'
})
export class PedidosProfessorService {
    apiUrl = "/api/Agendamento"

  constructor(private httpClient: HttpClient) { }


  save(pedido:PedidoProfessor){
    pedido.mtAgendamento= new Date()
    // pedido.mtDevolucao= new Date()
    // pedido.mtRetirada = new Date()
    return this.httpClient.post<PedidoProfessor>(this.apiUrl ,pedido);
   }


}

