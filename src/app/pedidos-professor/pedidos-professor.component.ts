
import { PedidosProfessorService } from './pedidos-professor.service';

import { Component } from '@angular/core';
import { PedidoProfessor } from './pedidosProfessor';



@Component({
  selector: 'app-pedidos-professor',
  templateUrl: './pedidos-professor.component.html',
  styleUrls: ['./pedidos-professor.component.css']
})
export class PedidosProfessorComponent {
  Pedido: PedidoProfessor[] = [];
  pedidoEnviado: boolean = false;
  novoPedido: PedidoProfessor = {};
  apiUrl = "/api/Agendamento"

  constructor(private pedidosProfessorService: PedidosProfessorService) {

  //  this.submitPedido()
    }

  // adicionarItem(){
  //   this.itensPedido.push()
  // }

  adicionarPedido() {
    this.pedidosProfessorService.save(this.novoPedido).subscribe({
      next: (response) => {
        // this.submitPedido()
        this.novoPedido = {};
      }
    })

  }

  // removerItem(index: number) {
  //   this.itensPedido.splice(index, 1);
  // }

  // submitPedido() {
  //   //Aqui você pode adicionar a lógica para enviar o pedido para o backend
  //   console.log('Itens do Pedido:', this.novoPedido);
  //   //Limpar os campos após o envio
  //   this.novoPedido = [];
  //   // mensagem de pedido enviado
  //   this.pedidoEnviado = true;
  //   //Após 5 segundos, limpar a mensagem
  //   setTimeout(() => {
  //     this.pedidoEnviado = false;
  //   }, 5000);
  // }
}
