import { CadastroService } from './cadastro.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  username!: string;
  password!: string;
  confirmPassword!: string;
  error!: string;
  successMessage!: string;
  novoCadastro : Cadastro = {};
  apiUrl = "/api/Utilizadores"

  constructor(private router: Router,
    private cadastroservice: CadastroService) { }

  register(): void {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match. Please try again.';
      return;
    }

    // Simulating saving the user information
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);

    this.successMessage = 'Cadastro feito com sucesso!';

    // Redirecting to the login page
    this.router.navigate(['/login']);
  }

  adicionarCadastro(){
    this.cadastroservice.save(this.novoCadastro).subscribe({
      next: (response) => {
        this.novoCadastro = {};
      }
      
    })
  }
}
