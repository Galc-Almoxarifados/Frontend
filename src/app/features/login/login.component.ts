import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  error!: string;

  constructor(private router: Router) { }
  login(): void {
    const users = [
      { username: 'luiz', password: '123456' },
      { username: 'Marion', password: '123456' },
    ];

    const user = users.find(user => user.username === this.username);

    if (user) {
      if (user.password === this.password) {
        if (user.username === 'luiz') {
          this.router.navigate(['/home/inicio']);
        } else if (user.username === 'Rodrigo') {
          window.location.href = 'http://localhost:8080';
        }
      } else {
        this.error = 'Senha inválida. Por favor, tente novamente.';
      }
    } else {
      this.error = 'Usuário não encontrado. Por favor, tente novamente.';
    }
  }
}
