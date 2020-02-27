import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer } from '@angular/platform-browser';

const ngMaterialModules = [
  FlexLayoutModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: [
    ...ngMaterialModules
  ],
  exports: [
    ...ngMaterialModules
  ]
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.
      addSvgIconSetInNamespace('social', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/social-network.svg')).
      addSvgIconSetInNamespace('other', sanitizer.bypassSecurityTrustResourceUrl('./assets/svg-icons/other.svg'));
  }
}
