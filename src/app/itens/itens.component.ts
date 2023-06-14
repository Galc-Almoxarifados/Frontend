import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {
  itens: any[] = [
    { nome: 'Item 1', status: 'Disponivel', qtd:'1'},
    { nome: 'Item 2', status: 'Em Manutenção', qtd:'3'},
    { nome: 'Item 3', status: 'Disponivel',  qtd:'3'},
    { nome: 'Item 4', status: 'Em Manutenção', qtd:'1'},
    { nome: 'Item 5', status: 'Disponivel', qtd:'5'}
  ];

  filtroStatus: string = 'todos';
  itensFiltrados: any[] = [];

  ngOnInit() {
    this.filtrarItens();
  }

  filtrarItens() {
    switch (this.filtroStatus) {
      case 'todos':
        this.itensFiltrados = this.itens;
        break;
      case 'disponivel':
        this.itensFiltrados = this.itens.filter(item => item.status === 'Disponivel');
        break;
      case 'manutencao':
        this.itensFiltrados = this.itens.filter(item => item.status === 'Em Manutenção');
        break;
      default:
        this.itensFiltrados = this.itens;
    }
  }


}

