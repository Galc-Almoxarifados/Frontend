
import { EstoqueService } from './estoque.service';
import { Component, OnInit } from '@angular/core';
import { Item } from "./item"
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']

})

export class EstoqueComponent {
  produtos: Item[] = [];

  modoEdicao: boolean = false;
  produtoEditado: Item = {};
  novoProduto: Item = {};
  apiUrl = "/api/Itens"

  constructor(private estoqueService: EstoqueService,  private snackBar: MatSnackBar) {
    this.listarProduto()
  }


  adicionarProduto() {
    this.estoqueService.save(this.novoProduto).subscribe({
      next: (response) => {
        this.listarProduto();
        this.novoProduto = {};

        // Exibir mensagem de sucesso
        this.snackBar.open('Item adicionado com sucesso!', 'Fechar', {
          duration: 50000, // Duração em milissegundos
          panelClass: ['custom-snackbar']
        });
      }
    });
  }

  listarProduto() {
    this.estoqueService.getAll().subscribe({
      next: (response) => {
        this.produtos = []
        response.forEach(element => {
          this.produtos.push(element);
        });
      }
    })
  }


  editarProduto(produto: Item) {
    this.modoEdicao = true;
    this.produtoEditado = { ...produto };
  }

  atualizarProduto() {
    this.estoqueService.update(this.produtoEditado).subscribe({
      next: (response) => {
        this.listarProduto()
        this.produtoEditado = {};

        this.snackBar.open('Item alterado com sucesso!', 'Fechar', {
          duration: 50000, // Duração em milissegundos
        });
      }
    })
  }

  cancelarEdicao() {
    this.modoEdicao = false;
    this.produtoEditado = {};
  }



  removerProduto(produto: Item) {
    let id = produto.idITem
    this.estoqueService.delete(id).subscribe({
      next: (response) => {
        this.listarProduto()

        this.snackBar.open('Item Excluido com sucesso!', 'Fechar', {
          duration: 50000, // Duração em milissegundos
        });
      },
      error: (erro) => {

      }
    })
  }

  obterNomeAlmoxarife(id: number | undefined): string {
    if (id === undefined) {
      return "Desconhecido";
    }

    // Aqui você pode implementar a lógica para mapear o ID do almoxarife para o nome correspondente
    if (id === 2) {
      return "Rodrigo";
    } else if (id === 1) {
      return "Luiz";
    } else {
      return "Desconhecido";
    }
  }

  obterNomeStatusItem(id: number | undefined): string {
    if (id === undefined) {
      return "Desconhecido";
    }

    // Aqui você pode implementar a lógica para mapear o ID do status para o valor correspondente
    if (id === 1) {
      return "Disponível";
    } else if (id === 2) {
      return "Indisponível";
    } else {
      return "Desconhecido";
    }
  }

  obterClasseStatusItem(id: number | undefined): string {
    if (id === undefined) {
      return "desconhecido";
    }

    if (id === 1) {
      return "disponivel";
    } else if (id === 2) {
      return "indisponivel";
    } else {
      return "desconhecido";
    }
  }

  obterNomeTipoItem(id: number | undefined): string {
    if (id === undefined) {
      return "Desconhecido";
    }

    // Aqui você pode implementar a lógica para mapear o ID do tipo de item para o valor correspondente
    if (id === 1) {
      return "Consumível";
    } else if (id === 2) {
      return "Não Consumível";
    } else {
      return "Desconhecido";
    }
  }

  obterClasseTipoItem(id: number | undefined): string {
    if (id === undefined) {
      return "desconhecido";
    }

    // Aqui você pode implementar a lógica para mapear o ID do tipo de item para a classe CSS correspondente
    if (id === 1) {
      return "tipo1";
    } else if (id === 2) {
      return "tipo2";
    } else {
      return "desconhecido";
    }
  }
}



