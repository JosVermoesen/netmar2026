import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Insurer } from '@/shared/models/insurer';
import { InsurerService } from '@/shared/services/insurer.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-all-insurers',
    templateUrl: './all-insurers.html',
    styleUrls: ['./all-insurers.scss'],
    standalone: true,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: []
})
export class AllInsurers implements OnInit {
    router = inject(Router);
    insurers: Insurer[] = [];
    insurerService = inject(InsurerService);

    ngOnInit() {
        this.insurers = this.insurerService.getAllInsurers();
    }

    goToDetail(insurerId: string) {
        this.router.navigate(['/insurances/allinsurers', insurerId]);
    }
}
