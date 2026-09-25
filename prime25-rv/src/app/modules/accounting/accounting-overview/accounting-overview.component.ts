import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entry } from 'contentful';
import { MdToHtmlPipe } from '@/shared/pipes/md-to-html.pipe';
import { ContentfulService } from '@/shared/services/contentful.service';
import { SeoService } from 'src/app/shared/services/seo.service';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from 'primeng/table';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';

type PricingRow = {
    contractType: string;
    yearlyPrice: string;
    monthlyPrice: string;
};

@Component({
    selector: 'app-accounting-overview',
    templateUrl: './accounting-overview.component.html',
    standalone: true,
    styles: [
        `
            .pricing-table-shell {
                padding: 1.25rem;
            }

            .pricing-table-header {
                margin-bottom: 1rem;
            }

            .pricing-table-title {
                margin: 0;
                color: var(--primary-color, #2563eb);
                font-size: 1.125rem;
                font-weight: 700;
            }

            .pricing-table-subtitle {
                margin: 0.35rem 0 0;
                color: var(--text-color-secondary, #6b7280);
                font-size: 0.95rem;
            }

            .pricing-table-wrapper {
                border: 1px solid var(--surface-border, #dfe7ef);
                border-radius: 0.9rem;
                background: linear-gradient(180deg, var(--surface-card, #ffffff) 0%, var(--surface-ground, #f8fafc) 100%);
            }

            :host ::ng-deep .pricing-datatable {
                overflow: hidden;
                border: 1px solid var(--surface-border, #dfe7ef);
                border-radius: 0.9rem;
                background: linear-gradient(180deg, var(--surface-card, #ffffff) 0%, var(--surface-ground, #f8fafc) 100%);
            }

            :host ::ng-deep .pricing-datatable .p-datatable-table {
                border-collapse: separate;
                border-spacing: 0;
            }

            :host ::ng-deep .pricing-datatable th,
            :host ::ng-deep .pricing-datatable td {
                padding: 1rem 1.1rem;
                vertical-align: top;
            }

            :host ::ng-deep .pricing-datatable thead th {
                position: sticky;
                top: 0;
                z-index: 1;
                background: var(--primary-color, #2563eb);
                color: var(--primary-contrast-color, #ffffff);
                font-size: 0.82rem;
                font-weight: 700;
                letter-spacing: 0.04em;
                text-transform: uppercase;
            }

            :host ::ng-deep .pricing-datatable thead th:first-child {
                border-top-left-radius: 0.9rem;
            }

            :host ::ng-deep .pricing-datatable thead th:last-child {
                border-top-right-radius: 0.9rem;
            }

            :host ::ng-deep .pricing-datatable tbody td {
                border-bottom: 1px solid var(--surface-border, #dfe7ef);
                line-height: 1.5;
            }

            :host ::ng-deep .pricing-datatable tbody tr:last-child td {
                border-bottom: 0;
            }

            :host ::ng-deep .pricing-datatable tbody tr:nth-child(even) td {
                background: color-mix(in srgb, var(--surface-ground, #f8fafc) 72%, white);
            }

            :host ::ng-deep .pricing-datatable .price-column {
                width: 11rem;
                text-align: right;
                white-space: nowrap;
                font-weight: 700;
            }

            :host ::ng-deep .pricing-datatable .price-empty {
                color: var(--text-color-secondary, #6b7280);
                font-weight: 600;
            }

            @media (max-width: 768px) {
                .pricing-table-shell {
                    padding: 1rem;
                }

                :host ::ng-deep .pricing-datatable th,
                :host ::ng-deep .pricing-datatable td {
                    padding: 0.85rem 0.9rem;
                }
            }
        `
    ],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TabsModule, TableModule]
})
export class AccountingOverviewComponent implements OnInit {
    accordeonUpdateOpen = true;
    accordeonOneAtATime = true;

    contentfulUpdatesEntry!: Entry<any>;
    contentfulContractTypesEntry!: Entry<any>;
    contentfulUpdatesHtml: SafeHtml | '' = '';
    contentfulContractTypesHtml: SafeHtml | '' = '';
    pricingRows: PricingRow[] = [
        {
            contractType: 'marIntegraal Servicecontract PLUS (MSP)',
            yearlyPrice: '€1.920,00',
            monthlyPrice: '€160,00'
        },
        {
            contractType: 'marIntegraal Servicecontract 1985 (M85)',
            yearlyPrice: '€1.200,00',
            monthlyPrice: '€100,00'
        },
        {
            contractType: 'marIntegraal Updatecontract (MUC)',
            yearlyPrice: '€720,00',
            monthlyPrice: '€60,00'
        },
        {
            contractType: 'Optie Forfait verplaatsing, (telefonische) hulp bij (her)opstart besturingssysteem, diverse oplossingen, per 2 uur',
            yearlyPrice: '€242,00',
            monthlyPrice: '-'
        },
        {
            contractType: '(Uitsluitend) telefonische interventie bij updatecontracten: per interventie forfait Optie Forfait (vooruitbetaalbaar via overschrijving)',
            yearlyPrice: '€100,00',
            monthlyPrice: '-'
        }
    ];

    valueTab = '2';

    constructor(
        private seoS: SeoService,
        private cfService: ContentfulService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit(): void {
        this.seoS.setAll('MARINTEGRAAL');

        const contentfulUpdateId = '64Wa2kez6Yo9OqgdAAxq8s';
        this.cfService.getContentDetail(contentfulUpdateId).subscribe((result) => {
            this.contentfulUpdatesEntry = result;
            this.contentfulUpdatesHtml = this.toSafeHtml(this.extractMarkdown(result));
        });
        const contentfulContractTypesId = '1eD6PrHZAV7K843r9KUvXN';
        this.cfService.getContentDetail(contentfulContractTypesId).subscribe((result) => {
            this.contentfulContractTypesEntry = result;
            this.contentfulContractTypesHtml = this.toSafeHtml(this.extractMarkdown(result));
        });
    }

    private extractMarkdown(entry: Entry<any>): string {
        const fields = (entry?.fields ?? {}) as Record<string, unknown>;
        const raw = fields['markdownText'] ?? fields['mdTextBody'] ?? fields['mdText'] ?? fields['body'] ?? fields['text'];

        if (typeof raw === 'string') {
            return raw;
        }

        if (raw && typeof raw === 'object') {
            const localized = raw as Record<string, unknown>;
            const candidate = localized['nl-BE'] ?? localized['nl'] ?? localized['en-US'] ?? localized['en'] ?? Object.values(localized)[0];
            return typeof candidate === 'string' ? candidate : '';
        }

        return '';
    }

    private toSafeHtml(markdown: string): SafeHtml {
        const normalized = markdown.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n');
        return this.sanitizer.bypassSecurityTrustHtml(marked.parse(normalized, { gfm: true, breaks: true }));
    }
}
