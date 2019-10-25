import { NgModule } from '@angular/core';
import { CustomerApiComponent } from './customer-api/customer-api.component';
import { ManagementRoutingModule } from './management-routing.module';

@NgModule({
  declarations: [CustomerApiComponent],
  imports: [ManagementRoutingModule],
  exports: [CustomerApiComponent]
})
export class ManagementModule { }
