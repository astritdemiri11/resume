import { Component, EventEmitter, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  @Output() menuItemClick: EventEmitter<void> = new EventEmitter<void>();

  Environment = environment;

  constructor() { }

  onMenuItemClick() {
    this.menuItemClick.emit();
  }
}
