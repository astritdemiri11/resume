import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutConfig } from 'src/app/shared/model/layout.model';
import { ThemeItem } from 'src/app/shared/model/theme.model';
import { LayoutService } from 'src/app/shared/service/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  @HostBinding('class') componentCssClass?: string;
  layoutConfig: LayoutConfig;

  private subscriptions: Subscription[];

  constructor(private sharedService: LayoutService, private overlayContainer: OverlayContainer) {
    this.subscriptions = [];
    this.layoutConfig = this.sharedService.getSettings();

    this.subscriptions.push(this.layoutConfig.theme.typeSubject$.subscribe((themeType: ThemeItem) => {
      this.overlayContainer.getContainerElement().classList.add(themeType);
      this.componentCssClass = themeType;
    }));
   }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
