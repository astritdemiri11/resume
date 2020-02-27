import { Component, EventEmitter, Output } from '@angular/core';
import { LayoutConfig } from 'src/app/shared/model/layout.model';
import { ThemeItem } from 'src/app/shared/model/theme.model';
import { LayoutService } from 'src/app/shared/service/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuClick: EventEmitter<void> = new EventEmitter<void>();

  ThemeEnum = ThemeItem;
  layoutConfig: LayoutConfig;

  constructor(private sharedService: LayoutService) {
    this.layoutConfig = this.sharedService.getSettings();
  }

  onMenuClick() {
    this.menuClick.emit();
  }

  onThemeChange(themeType: ThemeItem) {
    this.sharedService.setTheme(themeType);
  }
}
