import { ItensComponent } from './itens/itens.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './features/cadastro/cadastro.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  {
    pathMatch: 'full', path: '', redirectTo: 'home'
  },
  {
    path: 'login', loadComponent: () => LoginComponent,
    // canMatch:
  },
  {
    path: 'cadastro', component: CadastroComponent,
    // canMatch:
  },
  {
    path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)

  },
  {
    path: 'itens', component: ItensComponent
    // canMatch:
  },
  {
    path: '**', loadComponent: () => NotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
