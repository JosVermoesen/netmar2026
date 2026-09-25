import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Entry } from 'contentful';
import { DynamicDialogRef, DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { PrivacyModalComponent } from 'src/app/modules/privacy/privacy-modal/privacy-modal.component';
import { ContentfulService } from 'src/app/shared/services/contentful.service';
import { MdToHtmlPipe } from 'src/app/shared/pipes/md-to-html.pipe';

import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html',
    styleUrls: ['./privacy.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ButtonDirective, Ripple, MdToHtmlPipe, DynamicDialogModule]
})
export class PrivacyComponent implements OnInit {
    contentfulItem!: Entry<any>;
    ref!: DynamicDialogRef | null;

    constructor(
        public ds: DialogService,
        private ts: TranslateService,
        private cfService: ContentfulService
    ) {}

    ngOnInit() {
        const contentfulId = '1dT2EAqGoQfcRDcXi62YmX';
        this.cfService.getContentDetail(contentfulId).subscribe((result) => {
            this.contentfulItem = result;
            const cpStatus = localStorage.getItem('v_privacy');
            if (!cpStatus) {
                this.privacyModal();
            }
            // console.log(this.contentfulItem);
        });
    }

    privacyModal() {
        console.log('no policies viewed yet!');
        const lblTitle = 'Cookies en Privacy';
        const initialState = {
            header: lblTitle,
            width: '50',
            data: {}
        };
        this.ref = this.ds.open(PrivacyModalComponent, initialState);
    }

    reNew(): void {
        console.log('hello');
        localStorage.removeItem('v_privacy');
        this.privacyModal();
    }
}
