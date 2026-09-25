import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

import { MdToHtmlPipe } from '@/shared/pipes/md-to-html.pipe';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'app-ins-investment',
    templateUrl: './ins-investment.component.html',
    styleUrls: ['./ins-investment.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TabsModule, MdToHtmlPipe]
})
export class InsInvestmentComponent implements OnInit {
    // catalogUrl = 'http://www.makelaarinverzekeringen.be/ibpview/Pagina%20LevensverzekeringBelegging%20NL?ibp=true';

    contentfulItem!: Entry<any>;
    valueTab = '1';

    constructor(
        private router: Router,
        private cfService: ContentfulService
    ) {}

    ngOnInit(): void {
        const contentfulId = '3bmEeygHbxja5OGvUwxQfG';
        this.cfService.getContentDetail(contentfulId).subscribe((result) => {
            this.contentfulItem = result;
            // console.log(this.contentfulItem);
        });
    }

    handleChange(e: any) {
        if (e.index === 0) {
            this.router.navigate(['/insurances/overview']);
        }
    }
}
