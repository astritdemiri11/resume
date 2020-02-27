import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

enum EffectDefaultItem {
  Init = 'init',
  End = 'end'
}

@Directive({
  selector: '[appAttrEffect]'
})
export class AttrEffectDirective implements AfterViewInit, OnInit, OnDestroy {
  @Input() appAttrEffect = '';
  @Input() effectInit = '';
  @Input() effectInitOn = '';
  @Input() effectEnd = '';
  @Input() effectEndOn = '';
  @Input() effectDefault = '';
  @Input() effectTransition = '';

  private attrEffectArray: string[];
  private effectInitArray: string[];
  private effectInitOnArray: string[];
  private effectEndArray: string[];
  private effectEndOnArray: string[];
  private effectDefaultArray: string[];
  private effectTransitionArray: string[];
  private effectLength: number;

  private unSubscribers: (() => void)[];

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {
    this.unSubscribers = [];
    this.attrEffectArray = [];
    this.effectInitArray = [];
    this.effectInitOnArray = [];
    this.effectEndArray = [];
    this.effectEndOnArray = [];
    this.effectDefaultArray = [];
    this.effectTransitionArray = [];
    this.effectLength = 0;
  }


  ngOnInit() {
    this.attrEffectArray = this.appAttrEffect.split('|');
    this.effectInitArray = this.effectInit.split('|');
    this.effectInitOnArray = this.effectInitOn.split('|');
    this.effectEndArray = this.effectEnd.split('|');
    this.effectEndOnArray = this.effectEndOn.split('|');
    this.effectDefaultArray = this.effectDefault.split('|');
    this.effectTransitionArray = this.effectTransition.split('|');

    this.effectLength = Math.max(this.attrEffectArray.length, this.effectInitArray.length, this.effectInitOnArray.length,
      this.effectEndArray.length, this.effectEndOnArray.length);
  }

  ngAfterViewInit() {
    for (let i = 0; i < this.effectLength; i++) {
      const appAttrEffect = this.attrEffectArray[i] || this.attrEffectArray[this.attrEffectArray.length - 1];
      const effectInit = this.effectInitArray[i] || this.effectInitArray[this.effectInitArray.length - 1];
      const effectInitOn = this.effectInitOnArray[i] || this.effectInitOnArray[this.effectInitOnArray.length - 1];
      const effectEnd = this.effectEndArray[i] || this.effectEndArray[this.effectEndArray.length - 1];
      const effectEndOn = this.effectEndOnArray[i] || this.effectEndOnArray[this.effectEndOnArray.length - 1];
      const effectDefault = this.effectDefaultArray[i] || this.effectDefaultArray[this.effectDefaultArray.length - 1];
      const effectTransition = this.effectTransitionArray[i] || this.effectTransitionArray[this.effectTransitionArray.length - 1];

      if (effectDefault === EffectDefaultItem.Init) {
        this.renderer2.setStyle(this.elementRef.nativeElement, appAttrEffect, effectInit);
      } else if (effectDefault === EffectDefaultItem.End) {
        this.renderer2.setStyle(this.elementRef.nativeElement, appAttrEffect, effectEnd);
      }

      if (effectInitOn) {
        this.unSubscribers.push(this.renderer2.listen(this.elementRef.nativeElement, effectInitOn, () => {
          this.renderer2.setStyle(this.elementRef.nativeElement, appAttrEffect, effectInit);
        }));
      }

      if (effectEndOn) {
        this.unSubscribers.push(this.renderer2.listen(this.elementRef.nativeElement, effectEndOn, () => {
          this.renderer2.setStyle(this.elementRef.nativeElement, appAttrEffect, effectEnd);
        }));
      }

      if (effectTransition) {
        this.renderer2.setStyle(this.elementRef.nativeElement,
          'transition', appAttrEffect + ' ' + effectTransition + ' ease-in-out');
      }
    }
  }

  ngOnDestroy() {
    this.unSubscribers.forEach(unSubscriber => unSubscriber());
  }
}
