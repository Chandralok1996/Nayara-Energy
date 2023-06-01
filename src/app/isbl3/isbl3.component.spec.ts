import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Isbl3Component } from './isbl3.component';

describe('Isbl3Component', () => {
  let component: Isbl3Component;
  let fixture: ComponentFixture<Isbl3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Isbl3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Isbl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
