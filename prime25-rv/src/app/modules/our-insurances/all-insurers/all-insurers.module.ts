import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AllInsurers } from './all-insurers';
import { InsurerDetailPage } from './insurer-detail/insurer-detail.page';

const routes: Routes = [
    {
        path: '',
        component: AllInsurers
    },
    {
        path: ':insurerId',
        component: InsurerDetailPage
    }
];

@NgModule({
    imports: [CommonModule, TranslateModule, FormsModule, RouterModule.forChild(routes), AllInsurers]
})
export class AllInsurersModule {}
