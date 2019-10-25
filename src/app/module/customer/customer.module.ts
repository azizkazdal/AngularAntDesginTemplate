import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CustomerListComponent],
  imports: [CustomerRoutingModule],
  exports: [CustomerListComponent]
})
export class CustomerModule { }
