import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { FactsComponent } from './default/component/facts/facts.component';
import { IntroComponent } from './default/component/intro/intro.component';
import { DefaultComponent } from './default/default.component';

const homeRoutes: Routes = [
  { path: '', component: DefaultComponent }
];

@NgModule({
  declarations: [
    FactsComponent,
    IntroComponent,
    DefaultComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
