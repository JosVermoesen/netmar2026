import { HttpErrorResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-server-error',
    imports: [CardModule],
    templateUrl: './server-error.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './server-error.scss'
})
export class ServerError {
    error?: any;

    constructor(private router: Router) {
        const navigation = this.router.currentNavigation();
        this.error = navigation?.extras.state?.['error'];
    }
}
