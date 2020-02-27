import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './default/default.component';

const homeRoutes: Routes = [
  { path: '', component: DefaultComponent }
];

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
