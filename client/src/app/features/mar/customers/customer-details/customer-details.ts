import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatDivider } from '@angular/material/divider';
import { CustomerService } from '../../../../core/services/customer-service';
import { Customer } from '../../../../shared/models/customer';

@Component({
  selector: 'app-customer-details',
  imports: [MatDivider],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.scss',
})
export class CustomerDetails implements OnInit {
  private customerService = inject(CustomerService);
  private activatedRoute = inject(ActivatedRoute);
  customer = signal<Customer | undefined>(undefined);

  ngOnInit(): void {
    this.loadCustomer();
  }

  loadCustomer() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;

    this.customerService.getCustomer(+id).subscribe({
      next: (customer) => this.customer.set(customer),
      error: (error) => console.error('Error loading customer:', error),
      complete: () => console.log(this.customer),
    });
  }
}
