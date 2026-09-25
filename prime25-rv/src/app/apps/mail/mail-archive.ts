import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MailService } from './service/mail.service';
import { MailTableComponent } from './mail-table';
import { Mail } from '@/types/mail';

@Component({
    selector: 'app-mail-archive',
    standalone: true,
    imports: [MailTableComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    template: `<app-mail-table [mails]="archivedMails"></app-mail-table>`
})
export class MailArchiveComponent implements OnDestroy {
    archivedMails: Mail[] = [];

    subscription: Subscription;

    constructor(private mailService: MailService) {
        this.subscription = this.mailService.mails$.subscribe((data) => {
            this.archivedMails = data.filter((d) => d.archived);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
