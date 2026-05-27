import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Customer } from '../../../../shared/models/customer';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-customer-item',
  imports: [MatCard, MatCardContent, RouterLink],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.scss',
})
export class CustomerItem {
  @Input() customer?: Customer;
}
