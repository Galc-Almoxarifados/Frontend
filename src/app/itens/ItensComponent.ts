import { Component, OnInit } from '@angular/core';
import { ItensService } from './itens.service';
import { Itens } from './itens';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent  {
  itens: Itens[] = [];
  apiUrl = "/api/Itens"

  constructor(private itensService: ItensService) {
    this.listarProduto()
  }

  listarProduto() {
    this.itensService.getAllItens().subscribe({
      next: (response) => {
        this.itens = []
        response.forEach(element => {
          this.itens.push(element);
        });
      }
    })
  }
}

