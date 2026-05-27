import { Component, inject } from '@angular/core';
import { Header } from './layout/header/header';
import { RouterOutlet } from '@angular/router';
import { InitService } from './core/services/init.service';
import { AccountService } from './core/services/account-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private initService = inject(InitService);
  private accountService = inject(AccountService);

  constructor() {
    this.initService.init();
    this.accountService.getUserInfo().subscribe();    
  }
}
