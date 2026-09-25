import { Component, inject, OnInit, signal, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { SupplierService } from '../../../../core/services/supplier-service';
import { Supplier } from '../../../../shared/models/supplier';

@Component({
    selector: 'app-supplier-details',
    imports: [MatDivider],
    templateUrl: './supplier-details.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './supplier-details.scss'
})
export class SupplierDetails implements OnInit {
    private supplierService = inject(SupplierService);
    private activatedRoute = inject(ActivatedRoute);
    supplier = signal<Supplier | undefined>(undefined);

    ngOnInit(): void {
        this.loadSupplier();
    }

    loadSupplier() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (!id) return;

        this.supplierService.getSupplier(+id).subscribe({
            next: (supplier) => this.supplier.set(supplier),
            error: (error) => console.error('Error loading supplier:', error),
            complete: () => console.log(this.supplier)
        });
    }
}
