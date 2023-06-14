import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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
}
