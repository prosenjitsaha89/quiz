import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicReactiveComponent } from './dynamic-reactive.component';

describe('DynamicReactiveComponent', () => {
  let component: DynamicReactiveComponent;
  let fixture: ComponentFixture<DynamicReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
