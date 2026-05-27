import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { AccountService } from '../../../core/services/account-service';
import { SnackbarService } from '../../../core/services/snackbar-service';
import { TextInput } from '../../../shared/components/text-input/text-input';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, MatCard, MatButton, JsonPipe, TextInput],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private fb = inject(FormBuilder);
  private accountService = inject(AccountService);
  private router = inject(Router);
  private snack = inject(SnackbarService);
  validationErrors?: string[];

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    berNumber: ['', Validators.required],
    clientNumber: ['220750', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: (result) => {
        console.log('Registration successful:', result);
        this.snack.success('Registration successful - you can now login');
      },
      error: (errors) => {
        this.snack.error(
          'Registration failed - please check the form for errors'
        );
      },
      complete: () => this.router.navigate(['/account/login']),
    });
  }
}
