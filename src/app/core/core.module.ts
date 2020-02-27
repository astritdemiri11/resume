import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutService } from '../shared/service/layout.service';
import { SharedModule } from '../shared/shared.module';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    RouterModule,

    SharedModule
  ],
  exports: [
    LayoutComponent
  ],
  providers: [
    LayoutService
  ]
})
export class CoreModule { }
