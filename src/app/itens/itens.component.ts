
import { Component } from '@angular/core';

import { Itens } from './itens';
import { ItensService } from './itens.service';


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

   obterNomeAlmoxarife(id: number | undefined): string {
    if (id === undefined) {
      return "Desconhecido";
    }

    // Lógica de mapeamento do ID do almoxarife para o nome correspondente
    if (id === 1) {
      return "Luiz";
    } else if (id === 2) {
      return "Maria";
    } else {
      return "Desconhecido";
    }
  }
}