import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
    selector: 'app-not-found',
    imports: [TranslateModule, Card, Button, RouterLink],
    templateUrl: './not-found.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './not-found.scss'
})
export class NotFound {}
