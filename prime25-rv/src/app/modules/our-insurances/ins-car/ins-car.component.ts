import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Entry } from 'contentful';

import { ContentfulService } from '@/shared/services/contentful.service';
import { MdToHtmlPipe } from '@/shared/pipes/md-to-html.pipe';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'app-ins-car',
    templateUrl: './ins-car.component.html',
    styleUrls: ['./ins-car.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TabsModule, MdToHtmlPipe]
})
export class InsCarComponent implements OnInit {
    cfCivilLiability!: Entry<any>;
    cfVehicle!: Entry<any>;
    cfDriver!: Entry<any>;
    cfLegalAssistance!: Entry<any>;
    cfTravelAssistance!: Entry<any>;

    carDamageCertificateHtml = '';
    valueTab = '0';

    constructor(
        private router: Router,
        private http: HttpClient,
        private cfService: ContentfulService
    ) {}

    ngOnInit(): void {
        const car = 'html/schadeAttest.html';
        this.http
            .get('/templates/' + car, {
                responseType: 'text'
            })
            .subscribe((data) => {
                this.carDamageCertificateHtml = data;
            });

        const gCivilLiabilityId = '2DsHv5fW3KTTnjf1av7ic8';
        this.cfService.getContentDetail(gCivilLiabilityId).subscribe((result) => {
            this.cfCivilLiability = result;
            console.log(this.cfCivilLiability);
        });
        const gVehicleId = '6XpQ2EgfwtYv833SVtOP5X';
        this.cfService.getContentDetail(gVehicleId).subscribe((result) => {
            this.cfVehicle = result;
            console.log(this.cfVehicle);
        });
        const gDriverId = '4OKSlz13cOVo1cJxuxFXFz';
        this.cfService.getContentDetail(gDriverId).subscribe((result) => {
            this.cfDriver = result;
            console.log(this.cfDriver);
        });
        const gLegalAssistanceId = '5Yf8UcAXNEIvYNaXIr4oVg';
        this.cfService.getContentDetail(gLegalAssistanceId).subscribe((result) => {
            this.cfLegalAssistance = result;
            console.log(this.cfLegalAssistance);
        });
        const gTravelAssistanceId = '3yDmEDBMvvH4PfyvaaNKWt';
        this.cfService.getContentDetail(gTravelAssistanceId).subscribe((result) => {
            this.cfTravelAssistance = result;
            console.log(this.cfTravelAssistance);
        });
    }

    handleChange(e: any) {
        if (e.index === 0) {
            this.router.navigate(['/insurances/overview']);
        }
    }
}
