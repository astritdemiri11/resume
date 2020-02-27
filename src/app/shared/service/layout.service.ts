import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { LayoutConfig } from '../model/layout.model';
import { ThemeItem } from '../model/theme.model';


@Injectable()
export class LayoutService {
  private configs: LayoutConfig;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.configs = {
      breakpoint: {
        isHandset$: this.breakpointObserver.observe(Breakpoints.Handset)
          .pipe(
            map(result => result.matches),
            shareReplay()
          )
      },
      theme: {
        type: ThemeItem.Light,
        typeSubject$: new Subject<ThemeItem>()
      }
    };
  }

  getSettings(): LayoutConfig {
    return this.configs;
  }

  setTheme(themeType: ThemeItem): ThemeItem {
    this.configs.theme.type = themeType;
    this.configs.theme.typeSubject$.next(themeType);
    return this.configs.theme.type;
  }
}
