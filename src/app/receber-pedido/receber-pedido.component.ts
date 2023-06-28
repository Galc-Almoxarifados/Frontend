import { Component } from '@angular/core';

@Component({
  selector: 'app-receber-pedido',
  templateUrl: './receber-pedido.component.html',
  styleUrls: ['./receber-pedido.component.css']
})
export class ReceberPedidoComponent {

  pedido: any = {
    cliente: 'Marion',
    data: new Date(),
    quantidade: 5,
    itens: [
      { produto: 'Monitor', quantidade: 5,  },

    ]
  };

  quantidadeRecebida: number = 0;
  observacoes: string = '';

  receberPedido() {
    // Lógica para receber o pedido e registrar a quantidade recebida e as observações
    console.log('Pedido recebido. Quantidade recebida:', this.quantidadeRecebida);
    console.log('Observações:', this.observacoes);
  }
}


