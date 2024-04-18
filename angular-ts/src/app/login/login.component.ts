import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmailFieldComponent } from '../email-field/email-field.component';
import { PasswordFieldComponent } from '../password-field/password-field.component';
import { NgIf } from '@angular/common';
import { translateError } from '../utils/translateError';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    EmailFieldComponent,
    ReactiveFormsModule,
    PasswordFieldComponent,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async login() {
    console.log('Logging in...', this.loginForm.value);

    return fetch('https://backend-login-placeholder.deno.dev/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }),
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
        this.errorMessage = translateError(error.message);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
