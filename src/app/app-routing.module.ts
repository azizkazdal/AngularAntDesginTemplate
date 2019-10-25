import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginModule } from './module/login/login.module';
import { LayoutModule } from './module/layout/layout.module';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./module/layout/layout.module').then(m => m.LayoutModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

