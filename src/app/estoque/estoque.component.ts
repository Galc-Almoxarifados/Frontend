import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent {
  produtos: any[] = [
    { id: 1, nome: 'Arduino', quantidade: 10, unidade: 'un' },
    { id: 2, nome: 'Produto 2', quantidade: 5, unidade: 'kg' },
    { id: 3, nome: 'Produto 3', quantidade: 20, unidade: 'cx' }
  ];

  modoEdicao: boolean = false;
  produtoEditado: any = {};

  novoProduto: any = {};

  adicionarProduto() {
    const novoId = this.produtos.length > 0 ? this.produtos[this.produtos.length - 1].id + 1 : 1;
    this.produtos.push({ id: novoId, ...this.novoProduto });
    this.novoProduto = {};
  }


  editarProduto(produto: any) {
    this.modoEdicao = true;
    this.produtoEditado = { ...produto };
  }

  atualizarProduto() {
    const index = this.produtos.findIndex(p => p.id === this.produtoEditado.id);
    if (index !== -1) {
      this.produtos[index] = { ...this.produtoEditado };
      this.cancelarEdicao();
    }
  }

  cancelarEdicao() {
    this.modoEdicao = false;
    this.produtoEditado = {};
  }

  removerProduto(produto: any) {
    const index = this.produtos.findIndex(p => p.id === produto.id);
    if (index !== -1) {
      this.produtos.splice(index, 1);
    }
  }
}
