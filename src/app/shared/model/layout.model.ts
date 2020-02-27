import { Observable, Subject } from 'rxjs';

import { ThemeItem } from './theme.model';


export interface LayoutConfig {
    readonly breakpoint: {
      readonly isHandset$: Observable<boolean>
    };
    readonly theme: {
      type: ThemeItem,
      readonly typeSubject$: Subject<ThemeItem>
    };
  }
