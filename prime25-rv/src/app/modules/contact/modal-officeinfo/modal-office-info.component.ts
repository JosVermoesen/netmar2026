import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TranslateModule } from '@ngx-translate/core';
import { Ripple } from 'primeng/ripple';
import { ButtonDirective } from 'primeng/button';

@Component({
    selector: 'app-modal-office-info',
    templateUrl: './modal-office-info.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [ButtonDirective, Ripple, TranslateModule]
})
export class ModalOfficeInfoComponent {
    title!: string;

    constructor(
        public ref: DynamicDialogRef,
        public config: DynamicDialogConfig
    ) {}

    modalClose(): void {
        this.ref.close();
    }
}
