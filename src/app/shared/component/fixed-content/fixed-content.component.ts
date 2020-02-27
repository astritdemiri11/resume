import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fixed-content',
  templateUrl: './fixed-content.component.html',
  styleUrls: ['./fixed-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FixedContentComponent implements AfterViewInit {
  @Input()
  get overlay() { return this.overlayInput; }
  set overlay(value: any) { this.overlayInput = coerceBooleanProperty(value); }

  @Input()
  get top() { return this.topInput; }
  set top(value: any) { this.topInput = coerceBooleanProperty(value); }

  @Input()
  get bottom() { return this.bottomInput; }
  set bottom(value: any) { this.bottomInput = coerceBooleanProperty(value); }

  @Input()
  get right() { return this.rightInput; }
  set right(value: any) { this.rightInput = coerceBooleanProperty(value); }


  private overlayInput?: boolean;
  private topInput?: boolean;
  private bottomInput?: boolean;
  private rightInput?: boolean;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngAfterViewInit() {
    if (this.overlay) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'overlay');
    }

    if (this.top) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'top');
    }

    if (this.bottom) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'bottom');
    }

    if (this.right) {
      this.renderer2.addClass(this.elementRef.nativeElement, 'right');
    }

    this.renderer2.setStyle(this.elementRef.nativeElement.parentNode, 'position', 'relative');
  }
}
