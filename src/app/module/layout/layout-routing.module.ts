import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "../../_helpers/auth.guard";
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'customers', loadChildren: () => import('../customer/customer.module').then(m => m.CustomerModule) },
            { path: 'management', loadChildren: () => import('../management/management.module').then(m => m.ManagementModule) }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
