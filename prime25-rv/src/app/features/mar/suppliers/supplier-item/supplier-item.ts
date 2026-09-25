import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Supplier } from '../../../../shared/models/supplier';

@Component({
    selector: 'app-supplier-item',
    imports: [MatCard, MatCardContent, RouterLink],
    templateUrl: './supplier-item.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './supplier-item.scss'
})
export class SupplierItem {
    @Input() supplier?: Supplier;
}
