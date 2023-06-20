
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';



import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { EstoqueComponent } from './estoque/estoque.component';
import {FormsModule} from '@angular/forms';
import { ManutencaoComponent } from './manutencao/manutencao.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ItensComponent } from "./itens/ItensComponent";

import { PedidosProfessorComponent } from './pedidos-professor/pedidos-professor.component';
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common'





@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    EstoqueComponent,
    ManutencaoComponent,
    PedidoComponent,
    PedidosProfessorComponent,
    ItensComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
