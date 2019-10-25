import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from 'src/app/_helpers/auth.guard';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, NgZorroAntdModule],
  providers: [
    AuthGuard
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
