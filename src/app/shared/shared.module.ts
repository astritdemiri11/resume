import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { FixedContentComponent } from './component/fixed-content/fixed-content.component';
import { AttrEffectDirective } from './directive/attr-effect/attr-effect.directive';



@NgModule({
  declarations: [
    AttrEffectDirective,
    FixedContentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    MaterialModule,

    AttrEffectDirective,
    FixedContentComponent
  ]
})
export class SharedModule { }
