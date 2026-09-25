import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { AccountService } from '../../../core/services/account-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Button, ButtonModule } from 'primeng/button';
import { Dialog, DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Password } from 'primeng/password';

@Component({
    selector: 'app-login',
    imports: [FormsModule, Password, InputTextModule, ReactiveFormsModule, ButtonModule, DialogModule],
    templateUrl: './login.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './login.scss'
})
export class Login {
    private fb = inject(FormBuilder);
    private accountService = inject(AccountService);
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);
    showLogInDialog = true;
    returnUrl = '/home';

    loginForm = this.fb.group({
        email: [''],
        password: ['']
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
        this.accountService.login(this.loginForm.value).subscribe({
            next: (result: any) => {
                this.accountService.getUserInfo().subscribe();
                this.showLogInDialog = false;
            },
            error: (error) => {
                console.error('Login failed', error);
            },
            complete: () => {
                this.router.navigateByUrl(this.returnUrl).catch((err) => {
                    console.error('Navigation error:', err);
                });
            }
        });
    }

    onRegisterSwitch() {
        this.showLogInDialog = false;
        this.router.navigate(['/features/account/register']);
    }

    onCancel() {
        this.showLogInDialog = false;
        this.router.navigateByUrl('/features/cart');
    }
}
