import { Routes } from '@angular/router';

export default [
    {
        path: 'dialog',
        loadComponent: () => import('./primedialog/primedialog').then((c) => c.PrimeDialogComponent),
        data: { breadcrumb: 'Dialog' }
    }
] as Routes;
