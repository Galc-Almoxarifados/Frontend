import { Component } from '@angular/core';
import { Pedido } from './pedido.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido: any = {
    cliente: 'João Silva',
    data: new Date(),
    quantidade: 5,
    itens: [
      { produto: 'Produto 1', quantidade: 2,  },
      { produto: 'Produto 2', quantidade: 3,  },
      { produto: 'Produto 3', quantidade: 1,  }
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

