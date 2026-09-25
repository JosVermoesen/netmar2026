import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'app-insurance-overview',
    templateUrl: './insurance-overview.component.html',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [AccordionModule, RouterLink]
})
export class InsuranceOverviewComponent {}
