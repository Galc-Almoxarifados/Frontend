import { PedidoProfessor } from './../pedidos-professor/pedidosProfessor';

import { PedidoService } from './pedido.service';

import { Component } from '@angular/core';



@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido: PedidoProfessor [] = [];
  apiUrl = "/api/Agendamento"
  quantidadeRecebida: number = 0;
  observacoes: string = '';



  constructor(private pedidoService: PedidoService ) {
    this.listarAgendamento();
  }

  listarAgendamento() {
    this.pedidoService.getAll().subscribe({
      next: (response) => {
        this.pedido = []
        response.forEach(element => {
          this.pedido.push(element);
        });
      }
    })
  }

  receberPedido() {
    // Lógica para receber o pedido e registrar a quantidade recebida e as observações
    console.log('Pedido recebido. Quantidade recebida:', this.quantidadeRecebida);
    console.log('Observações:', this.observacoes);
  }
}

