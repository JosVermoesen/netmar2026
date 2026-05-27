import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import {
  MatListOption,
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { Pagination } from '../../../shared/models/pagination';
import { LedgerAccountService } from '../../../core/services/ledgerAccount-service';
import { LedgerAccount } from '../../../shared/models/ledgerAccount';
import { LedgerAccountParams } from '../../../shared/models/ledgerAccountParams';
import { LedgerAccountItem } from './ledgerAccount-item/ledgerAccount-item';

@Component({
  selector: 'app-legerAccounts-component',
  imports: [
    LedgerAccountItem,
    MatButton,
    MatIcon,
    MatMenu,
    MatSelectionList,
    MatListOption,
    MatMenuTrigger,
    MatPaginator,
    FormsModule,
  ],
  templateUrl: './ledgerAccounts.html',
  styleUrl: './ledgerAccounts.scss',
})
export class LedgerAccounts implements OnInit {
  private ledgerAccountService = inject(LedgerAccountService);
  private dialogService = inject(MatDialog);
  ledgerAccounts?: Pagination<LedgerAccount>;
  sortOptions = [
    { name: 'Alphabetical A to Z', value: 'asc' },
    { name: 'Alphabetical Z to A', value: 'desc' },
  ];
  ledgerAccountParams = new LedgerAccountParams();
  pageSizeOptions = [4, 8, 12, 16];

  ngOnInit(): void {
    this.initializeLedgerAccounts();
  }

  initializeLedgerAccounts(): void {
    this.getLedgerAccounts();
  }

  getLedgerAccounts() {
    this.ledgerAccountService
      .getLedgerAccounts(this.ledgerAccountParams)
      .subscribe({
        next: (response) => (this.ledgerAccounts = response),
        error: (error) => console.log('Error fetching ledgerAccounts:', error),
      });
  }

  onSearchChange() {
    this.ledgerAccountParams.pageNumber = 1; // Reset to first page on search change
    this.getLedgerAccounts();
  }

  handlePageEvent(event: PageEvent) {
    this.ledgerAccountParams.pageNumber = event.pageIndex + 1; // PageEvent is zero-based
    this.ledgerAccountParams.pageSize = event.pageSize;
    this.getLedgerAccounts();
  }

  onSortChange(event: MatSelectionListChange) {
    const selectedOption = event.options[0];
    console.log('Selected option:', selectedOption);
    if (selectedOption) {
      this.ledgerAccountParams.sort = selectedOption.value;
      this.ledgerAccountParams.pageNumber = 1; // Reset to first page on sort change
      this.getLedgerAccounts();
    }
  }
}
