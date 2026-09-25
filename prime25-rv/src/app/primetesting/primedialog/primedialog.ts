import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { Avatar } from 'primeng/avatar';

@Component({
    selector: 'app-primedialog',
    imports: [CardModule, DialogModule, ButtonModule, InputTextModule, Avatar],
    templateUrl: './primedialog.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './primedialog.scss'
})
export class PrimeDialogComponent {
    basicDialogVisible: boolean = false;
    templateDialogVisible: boolean = false;
    headlessDialogVisible: boolean = false;

    showBasicDialog() {
        this.basicDialogVisible = true;
    }

    showTemplateDialog() {
        this.templateDialogVisible = true;
    }

    showHeadlessDialog() {
        this.headlessDialogVisible = true;
    }
}
