import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { InsurerDetailPage } from './insurer-detail.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: InsurerDetailPage
    }
];

@NgModule({
    imports: [CommonModule, TranslateModule, FormsModule, RouterModule.forChild(routes)]
})
export class InsurerDetailPageModule {}
