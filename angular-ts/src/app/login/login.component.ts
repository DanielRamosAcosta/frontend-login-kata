import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;
  errorMessage = '';

  constructor(private readonly router: Router) {}

  async login() {
    return fetch('https://backend-login-placeholder.deno.dev/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: this.email, password: this.password }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'error') {
          throw new Error(data.code);
        }
        return data.payload;
      })
      .then((payload) => {
        localStorage.setItem('token', payload.jwt);
      })
      .then(() => {
        return this.router.navigateByUrl('/recipes');
      })
      .catch((error) => {
        this.errorMessage = error.message;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
