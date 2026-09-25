import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-checkout-success',
    imports: [MatButton, RouterLink],
    templateUrl: './checkout-success.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './checkout-success.scss'
})
export class CheckoutSuccess {}
// ng g c features/checkout/checkout-success --skip-tests
