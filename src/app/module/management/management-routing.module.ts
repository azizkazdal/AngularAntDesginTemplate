import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerApiComponent } from './customer-api/customer-api.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'customer-api',
                component: CustomerApiComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule { }
