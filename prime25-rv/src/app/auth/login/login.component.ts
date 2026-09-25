import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
// import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/shared/models/user';
import { interval, map, Observable, take } from 'rxjs';
import { PrimeTemplate } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { Ripple } from 'primeng/ripple';
import { ButtonDirective, Button } from 'primeng/button';
import { AsyncPipe } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CookieService } from 'ngx-cookie-service';
import { AccountService } from 'src/app/core/services/account-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabelModule,
    ButtonDirective,
    Ripple,
    DialogModule,
    PrimeTemplate,
    Button,
    AsyncPipe,
    TranslateModule,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  checkForm!: FormGroup;
  activeUser: User = {} as User;
  userToCheck!: any;
  dummyNumber!: any;
  model: any = {};
  primeSpinner = false;
  show2WayDialog = false;
  tmpCurrentUser: User = {} as User;

  countdownObs$!: Observable<string>; //declare an observable
  cookieService = inject(CookieService);

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public aService: AccountService,
    // private toastr: ToastrService,
    private ts: TranslateService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, {
        validators: [Validators.required],
      }),
      password: new FormControl(null, { validators: [Validators.required] }),
    });
    this.checkForm = new FormGroup({
      numberToCheck: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      }),
    });
  }

  countdownTimer(seconds: number) {
    if (seconds > 120) {
      this.onCancel2Way();
    }
    return seconds.toString();
  }

  onRegister() {
    // Implement the registration logic here
  }
  
  login() {
    /* this.primeSpinner = true;
    this.aService.setLoading(true);
    this.aService
      .login({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      })
      .subscribe({
        next: () => {
          this.primeSpinner = false;
          this.dummyNumber = this.aService.get2WayCheck();
          console.log(this.dummyNumber);

          this.aService.currentUser$.pipe(take(1)).subscribe((result) => {
            this.activeUser = result as User;
            console.log(this.activeUser);
            if (this.activeUser.clientNumber === null) {
              this.ts
                .get('USEREDIT.ClientNumberWarning')
                .subscribe((res: string) => {
                  this.toastr.warning(res);
                });
            }
            this.tmpCurrentUser = this.activeUser;
            this.aService.logout();

            // console.log(this.activeUser);
            this.show2WayDialog = true;
            this.countdownObs$ = interval(1000).pipe(
              map((val) => this.countdownTimer(val))
            );
          });
        },
        error: () => {
          this.ts.get('LOGIN.Failed').subscribe((res: string) => {
            this.toastr.error(res);
          });
          this.primeSpinner = false;
          this.aService.setLoading(false);
        },
        complete: () => {
          this.aService.setLoading(false);
        },
      }); */
  }
  
  onCheck2Way() {
    const toCheck = this.checkForm.value.numberToCheck;
    // console.log(toCheck);
    if (toCheck == this.dummyNumber) {
      // this.aService.setCurrentUser(this.tmpCurrentUser);
      this.ts.get('LOGIN.Success').subscribe((res: string) => {
        // this.toastr.info(res);
      });
      /* this.aService.changeMemberPhoto(
        this.activeUser.photoUrl || '../../assets/user.png'
      ); */

      /* this.cookieService.set('v_user', JSON.stringify(this.activeUser), {
        expires: 365,
        path: '/',
        domain: '.rv.be',
        secure: true,
        sameSite: 'Lax',
      }); */

      // localStorage.setItem('v_user', JSON.stringify(this.activeUser));
      this.onLoggedIn('loggedIn');
    } else {
      // this.toastr.warning('Number does not match. Try again');
      this.checkForm.value.numberToCheck = null;
    }
  }

  onCancel2Way() {
    // this.toastr.info('2Way Check canceled');
    this.onLoggedIn('2WayCanceled');
  }

  onLoggedIn(returnMsg: string) {
    this.ref.close(returnMsg);
  }
}
