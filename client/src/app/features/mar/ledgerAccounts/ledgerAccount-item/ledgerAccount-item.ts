import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { LedgerAccount } from '../../../../shared/models/ledgerAccount';

@Component({
  selector: 'app-ledgerAccount-item',
  imports: [MatCard, MatCardContent, RouterLink],
  templateUrl: './ledgerAccount-item.html',
  styleUrl: './ledgerAccount-item.scss',
})
export class LedgerAccountItem {
  @Input() ledgerAccount?: LedgerAccount;
}
