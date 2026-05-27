import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AccountService } from '../../../core/services/account-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  returnUrl = '/shop';

  loginForm = this.fb.group({
    email: [''],
    password: [''],
  });

  constructor() {
    // Get the returnUrl from query parameters if it exists
    const url = this.activatedRoute.snapshot.queryParams['returnUrl'];
    console.log('Return URL:', url);
    if (url) {
      this.returnUrl = url;
    }
  }

  onSubmit() {
    console.log('Login form submitted:', this.loginForm.value);
    this.accountService.login(this.loginForm.value).subscribe({
      next: (result: any) => {
        this.accountService.getUserInfo().subscribe();
      },
      error: (error) => {
        console.error('Login failed', error);
      },
      complete: () => {
        this.router.navigateByUrl(this.returnUrl).catch((err) => {
          console.error('Navigation error:', err);
        });
      },
    });
  }
}
