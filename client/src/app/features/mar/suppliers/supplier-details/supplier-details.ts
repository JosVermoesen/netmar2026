import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { SupplierService } from '../../../../core/services/supplier-service';
import { Supplier } from '../../../../shared/models/supplier';

@Component({
  selector: 'app-supplier-details',
  imports: [MatDivider],
  templateUrl: './supplier-details.html',
  styleUrl: './supplier-details.scss',
})
export class SupplierDetails implements OnInit {
  private supplierService = inject(SupplierService);
  private activatedRoute = inject(ActivatedRoute);
  supplier?: Supplier;

  ngOnInit(): void {
    this.loadSupplier();
  }

  loadSupplier() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;

    this.supplierService.getSupplier(+id).subscribe({
      next: (supplier) => (this.supplier = supplier),
      error: (error) => console.error('Error loading supplier:', error),
      complete: () => console.log(this.supplier),
    });
  }
}
