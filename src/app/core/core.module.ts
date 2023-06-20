import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';


import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InicioComponent } from '../views/inicio/inicio.component';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'







@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    InicioComponent,



  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class CoreModule { }
