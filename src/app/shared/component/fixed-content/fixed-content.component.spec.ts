import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContentComponent } from './fixed-content.component';

describe('FixedContentComponent', () => {
  let component: FixedContentComponent;
  let fixture: ComponentFixture<FixedContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
