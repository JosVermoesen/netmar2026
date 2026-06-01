import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDivider } from '@angular/material/divider';
import { LedgerAccountService } from '../../../../core/services/ledgerAccount-service';
import { LedgerAccount } from '../../../../shared/models/ledgerAccount';

@Component({
  selector: 'app-ledgerAccount-details',
  imports: [MatDivider],
  templateUrl: './ledgerAccount-details.html',
  styleUrl: './ledgerAccount-details.scss',
})
export class LedgerAccountDetails implements OnInit {
  private ledgerAccountService = inject(LedgerAccountService);
  private activatedRoute = inject(ActivatedRoute);
  ledgerAccount = signal<LedgerAccount | undefined>(undefined);

  ngOnInit(): void {
    this.loadLedgerAccount();
  }

  loadLedgerAccount() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) return;

    this.ledgerAccountService.getLedgerAccount(+id).subscribe({
      next: (ledgerAccount) => this.ledgerAccount.set(ledgerAccount),
      error: (error) => console.error('Error loading ledgerAccount:', error),
      complete: () => console.log(this.ledgerAccount),
    });
  }
}
