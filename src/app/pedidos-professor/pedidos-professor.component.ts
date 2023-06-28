
import { PedidosProfessorService } from './pedidos-professor.service';

import { Component } from '@angular/core';
import { PedidoProfessor } from './pedidosProfessor';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-pedidos-professor',
  templateUrl: './pedidos-professor.component.html',
  styleUrls: ['./pedidos-professor.component.css']
})
export class PedidosProfessorComponent {
  Pedido: PedidoProfessor[] = [];
  pedidoEnviadoFlag: boolean = false;;
  novoPedido: PedidoProfessor = {};
  apiUrl = "/api/Agendamento"

  constructor(private pedidosProfessorService: PedidosProfessorService, private snackBar: MatSnackBar) {

  //  this.submitPedido()
    }

  // adicionarItem(){
  //   this.itensPedido.push()
  // }


  pedidoEnviado() {
    this.pedidoEnviadoFlag = true;
    // Aqui você pode adicionar a lógica adicional desejada após o pedido ser enviado
  }
  adicionarPedido() {
    this.pedidosProfessorService.save(this.novoPedido).subscribe({
      next: (response) => {
        // this.submitPedido()
        this.novoPedido = {};

        this.snackBar.open('Cadastro adicionado com sucesso!', 'Fechar', {
          duration: 50000, // Duração em milissegundos
          panelClass: ['custom-snackbar']
        });
      }
    })

  }
  pedidoEnviadoMensagem() {
    console.log('Pedido enviado com sucesso!');
    // Aqui você pode adicionar a lógica adicional desejada após o pedido ser enviado
  }

  // removerItem(index: number) {
  //   this.itensPedido.splice(index, 1);
  // }

  // submitPedido() {
  //   //Aqui você pode adicionar a lógica para enviar o pedido para o backend
  //   console.log('Itens do Pedido:', this.novoPedido);
  //   //Limpar os campos após o envio
  //   // this.novoPedido = [];
  //   // mensagem de pedido enviado
  //   this.pedidoEnviado = true;
  //   //Após 5 segundos, limpar a mensagem
  //   setTimeout(() => {
  //     this.pedidoEnviado = false;
  //   }, 5000);
  // }
}
