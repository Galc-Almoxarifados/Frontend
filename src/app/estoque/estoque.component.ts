import { EstoqueService } from './estoque.service';
import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import{Item} from "./item"



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

  constructor(private estoqueService: EstoqueService) {
    this.listarProduto()
  }


  adicionarProduto() {
   this.estoqueService.save(this.novoProduto).subscribe({
      next: (response) =>{
             this.listarProduto()
        this.novoProduto = {};
      }
    })

  }

  listarProduto(){
    this.estoqueService.getAll().subscribe({
      next: (response) =>{
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
      next: (response) =>{
             this.listarProduto()
        this.produtoEditado = {};
      }
    })
  }

  cancelarEdicao() {
    this.modoEdicao = false;
    this.produtoEditado = {};
  }

  removerProduto(produto: Item) {
    let id=produto.idITem
    this.estoqueService.delete(id).subscribe({
      next: (response) =>{
        this.listarProduto()
      },
      error:(erro) => {

      }
    })
  }
}
