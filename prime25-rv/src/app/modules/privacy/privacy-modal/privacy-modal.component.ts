import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AccordionModule } from 'primeng/accordion';
import { Button } from 'primeng/button';

@Component({
    selector: 'app-privacy-modal',
    templateUrl: './privacy-modal.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [Button, AccordionModule]
})
export class PrivacyModalComponent {
    activeIndex = 0;
    cookiesAndPrivacy: any[] = [
        {
            header: '0: Optimaal'
        },
        {
            header: '1: Basis'
        },
        {
            header: '2: Noodzakelijk'
        }
    ];

    active: any;

    activeIndexChange(index: number) {
        this.activeIndex = index as 0 | 1 | 2;
    }

    constructor(
        private router: Router,
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {
        this.active = localStorage.getItem('v_privacy') || '0';
        console.log('active is ' + this.active);
    }

    onAcceptPrivacy() {
        localStorage.setItem('v_privacy', this.cookiesAndPrivacy[this.activeIndex].header);
        console.log(this.cookiesAndPrivacy[this.activeIndex].header);
        this.ref.close(this.cookiesAndPrivacy[this.activeIndex].header);
    }

    onPrivacy() {
        this.router.navigate(['/privacy']);
    }
}
