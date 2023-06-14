import { Component } from '@angular/core';

interface ItemPedido {
  nome: string;
  quantidade?: number | null;
  dataEntrega: string | null;
  dataDevolucao: string | null;
}

@Component({
  selector: 'app-pedidos-professor',
  templateUrl: './pedidos-professor.component.html',
  styleUrls: ['./pedidos-professor.component.css']
})
export class PedidosProfessorComponent {
  itensPedido: ItemPedido[] = [{ nome: '', quantidade: null, dataEntrega: null, dataDevolucao: null }];
  pedidoEnviado: boolean = false;

  adicionarItem() {
    this.itensPedido.push({ nome: '', quantidade: null, dataEntrega: null, dataDevolucao: null });
  }

  removerItem(index: number) {
    this.itensPedido.splice(index, 1);
  }

  submitPedido() {
    // Aqui você pode adicionar a lógica para enviar o pedido para o backend
    console.log('Itens do Pedido:', this.itensPedido);
    // Limpar os campos após o envio
    this.itensPedido = [{ nome: '', quantidade: null, dataEntrega: null, dataDevolucao: null }];
    // Exibir mensagem de pedido enviado
    this.pedidoEnviado = true;
    // Após 10 segundos, limpar a mensagem
    setTimeout(() => {
      this.pedidoEnviado = false;
    }, 5000);
  }
}
