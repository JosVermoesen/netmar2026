import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/shared/services/contentful.service';

import { MdToHtmlPipe } from '@/shared/pipes/md-to-html.pipe';
import { TabsModule } from 'primeng/tabs';

@Component({
    selector: 'app-ins-fire',
    templateUrl: './ins-fire.component.html',
    styleUrls: ['./ins-fire.component.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [TabsModule, MdToHtmlPipe]
})
export class InsFireComponent implements OnInit {
    cfFireGenerally!: Entry<any>;
    cfFireHouse!: Entry<any>;
    cfFireBurglary!: Entry<any>;

    valueTab = '0';

    constructor(
        private router: Router,
        private cfService: ContentfulService
    ) {}

    ngOnInit(): void {
        const fireGenerallyId = '3B54XYvvHXaXNguIqrialm';
        this.cfService.getContentDetail(fireGenerallyId).subscribe((result) => {
            this.cfFireGenerally = result;
            // console.log(this.cfFireGenerally);
        });
        const fireHouseId = '5Qb07yFK9LNMzgHEViN2c';
        this.cfService.getContentDetail(fireHouseId).subscribe((result) => {
            this.cfFireHouse = result;
            // console.log(this.cfFireHouse);
        });
        const fireBurglaryId = 'lGVr8cL91Pzs0j6q9skiC';
        this.cfService.getContentDetail(fireBurglaryId).subscribe((result) => {
            this.cfFireBurglary = result;
            // console.log(this.cfFireBurglary);
        });
    }

    handleChange(e: any) {
        if (e.index === 0) {
            this.router.navigate(['/insurances/overview']);
        }
    }
}
