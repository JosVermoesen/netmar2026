import { Component, ElementRef, inject, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '@/layout/service/layout.service';
import { AppBreadcrumb } from './app.breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountService } from '@/core/services/account-service';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { CartService } from '@/core/services/cart.service';
import { IftaLabel } from 'primeng/iftalabel';
import { PasswordModule } from 'primeng/password';
import { environment } from 'src/environments/environment';

@Component({
    selector: '[app-topbar]',
    imports: [IftaLabel, PasswordModule, OverlayBadgeModule, FormsModule, ReactiveFormsModule, CommonModule, DialogModule, StyleClassModule, AppBreadcrumb, InputTextModule, ButtonModule, IconFieldModule, InputIconModule, TranslateModule],
    changeDetection: ChangeDetectionStrategy.Eager,
    templateUrl: './app.topbar.html'
})
export class AppTopbar implements OnInit {
    @ViewChild('menubutton') menuButton!: ElementRef;

    useShop = environment.useShop;
    useMar = environment.useMar;
    
    public layoutService = inject(LayoutService);
    public accountService = inject(AccountService);
    public cartService = inject(CartService); // Assuming cartService is similar to accountService
    private ts = inject(TranslateService);
    private router = inject(Router);

    showLogInDialog: boolean = false;
    showCheckInDialog: boolean = false;
    showRegisterDialog: boolean = false;

    loginForm!: FormGroup;
    registerForm!: FormGroup;
    checkInForm!: FormGroup;

    dummyNumber!: any;
    primeSpinner = false;
    show2WayDialog = false;
    
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl(null, {
                validators: [Validators.required]
            }),
            password: new FormControl(null, { validators: [Validators.required] })
        });
        this.checkInForm = new FormGroup({
            returnCodeToCheck: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]
            })
        });
        this.registerForm = new FormGroup({
            firstName: new FormControl(null, {
                validators: [Validators.required]
            }),
            lastName: new FormControl(null, {
                validators: [Validators.required]
            }),
            email: new FormControl(null, {
                validators: [Validators.required]
            }),
            berNumber: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(6), Validators.maxLength(36)]
            }),
            clientNumber: new FormControl('220750', Validators.required),
            password: new FormControl(null, { validators: [Validators.required] })
        });
    }

    goToCart() {
        this.router.navigateByUrl('/features/cart');
    }

    onLogInSubmit() {
        this.accountService.login(this.loginForm.value).subscribe({
            next: () => {
                this.primeSpinner = false;
                this.showLogInDialog = false;
                
                this.dummyNumber = this.accountService.get2WayCheck();
                console.log(this.dummyNumber);
                this.showCheckInDialog = false;

            },
            error: (error) => {
                console.error('Login failed', error);
            },
            complete: () => {
                this.accountService.getUserInfo().subscribe();
                this.router.navigateByUrl('/');
            }
        });
    }

    onCheckSubmit() {
        this.router.navigateByUrl('/');
    }

    onRegisterSwitch() {
        this.showLogInDialog = false;
        this.showRegisterDialog = true;
    }

    onRegisterSubmit() {
        this.accountService.register(this.registerForm.value).subscribe({
            next: () => {
                this.showRegisterDialog = false;
            },
            error: (error) => {
                console.error('Registration failed', error);
                this.showRegisterDialog = true;
            },
            complete: () => {
                // this.accountService.getUserInfo().subscribe();
                this.showCheckInDialog = true;
            }
        });
    }

    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onProfileButtonClick() {
        this.layoutService.showProfileSidebar();
    }

    onConfigButtonClick() {
        this.layoutService.showConfigSidebar();
    }
}
