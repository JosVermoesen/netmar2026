import { Component, inject, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { BusyService } from 'src/app/core/services/busy-service';

@Component({
    selector: 'app-empty-state',
    imports: [MatIcon, ButtonModule],
    templateUrl: './empty-state.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './empty-state.scss'
})
export class EmptyState {
    busyService = inject(BusyService);
    message = input.required<string>();
    icon = input.required<string>();
    actionText = input.required<string>();
    action = output<void>();

    onAction() {
        this.action.emit();
    }
}
