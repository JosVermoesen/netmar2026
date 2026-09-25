import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';
import { RouterLink } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

type HostingRow = {
    feature: string;
    hosting1: string;
    hosting3: string;
    hosting5: string;
};

@Component({
    selector: 'app-hosting-overview',
    templateUrl: './hosting-overview.component.html',
    standalone: true,
    styles: [
        `
            .hosting-table-shell {
                padding: 1.25rem;
            }

            .hosting-table-header {
                margin-bottom: 1rem;
            }

            .hosting-table-title {
                margin: 0;
                color: var(--primary-color, #2563eb);
                font-size: 1.125rem;
                font-weight: 700;
            }

            .hosting-table-subtitle {
                margin: 0.35rem 0 0;
                color: var(--text-color-secondary, #6b7280);
                font-size: 0.95rem;
            }

            :host ::ng-deep .hosting-datatable {
                overflow: hidden;
                border: 1px solid var(--surface-border, #dfe7ef);
                border-radius: 0.9rem;
                background: linear-gradient(180deg, var(--surface-card, #ffffff) 0%, var(--surface-ground, #f8fafc) 100%);
            }

            :host ::ng-deep .hosting-datatable .p-datatable-table {
                border-collapse: separate;
                border-spacing: 0;
            }

            :host ::ng-deep .hosting-datatable th,
            :host ::ng-deep .hosting-datatable td {
                padding: 1rem 1.1rem;
                vertical-align: top;
            }

            :host ::ng-deep .hosting-datatable thead th {
                background: var(--primary-color, #2563eb);
                color: var(--primary-contrast-color, #ffffff);
                font-size: 0.82rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                text-transform: uppercase;
            }

            :host ::ng-deep .hosting-datatable thead th:first-child {
                border-top-left-radius: 0.9rem;
            }

            :host ::ng-deep .hosting-datatable thead th:last-child {
                border-top-right-radius: 0.9rem;
            }

            :host ::ng-deep .hosting-datatable tbody td {
                border-bottom: 1px solid var(--surface-border, #dfe7ef);
                line-height: 1.5;
            }

            :host ::ng-deep .hosting-datatable tbody tr:last-child td {
                border-bottom: 0;
            }

            :host ::ng-deep .hosting-datatable tbody tr:nth-child(even) td {
                background: color-mix(in srgb, var(--surface-ground, #f8fafc) 72%, white);
            }

            :host ::ng-deep .hosting-datatable .feature-column {
                min-width: 16rem;
                font-weight: 600;
            }

            :host ::ng-deep .hosting-datatable .plan-column {
                min-width: 9rem;
                text-align: center;
                white-space: nowrap;
                font-weight: 700;
            }

            @media (max-width: 768px) {
                .hosting-table-shell {
                    padding: 1rem;
                }

                :host ::ng-deep .hosting-datatable th,
                :host ::ng-deep .hosting-datatable td {
                    padding: 0.85rem 0.9rem;
                }
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [AccordionModule, TableModule]
})
export class HostingOverviewComponent implements OnInit {
    valueTab = '0';

    hostingRows: HostingRow[] = [
        { feature: 'Prijs/maand', hosting1: '€ 8,25', hosting3: '€ 16,50', hosting5: '€ 24,75' },
        { feature: 'Web Sites', hosting1: '1', hosting3: '3', hosting5: '5' },
        { feature: 'Schijfruimte', hosting1: '1 GB', hosting3: '4 GB', hosting5: '7 GB' },
        { feature: 'Data/maand', hosting1: 'Onbeperkt', hosting3: 'Onbeperkt', hosting5: 'Onbeperkt' },
        { feature: 'Mail accounts', hosting1: '2', hosting3: 'Onbeperkt', hosting5: 'Onbeperkt' },
        { feature: 'Subdomeinen', hosting1: 'Onbeperkt', hosting3: 'Onbeperkt', hosting5: 'Onbeperkt' },
        { feature: 'Plesk', hosting1: 'Ja', hosting3: 'Ja', hosting5: 'Ja' },
        { feature: 'SpamExperts', hosting1: 'Ja', hosting3: 'Ja', hosting5: 'Ja' },
        { feature: 'Domein (.be .com e.a.)', hosting1: 'Ja', hosting3: 'Ja', hosting5: 'Ja' },
        {
            feature: '(Uitsluitend) telefonische interventie bij updatecontracten: per interventie forfait Optie Forfait (vooruitbetaalbaar via overschrijving)',
            hosting1: '',
            hosting3: '',
            hosting5: ''
        }
    ];

    constructor(private seoS: SeoService) {}

    ngOnInit(): void {
        this.seoS.setAll('HOSTING');
    }
}
