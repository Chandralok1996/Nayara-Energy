import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Isbl4Component } from './isbl4.component';

describe('Isbl4Component', () => {
  let component: Isbl4Component;
  let fixture: ComponentFixture<Isbl4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Isbl4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Isbl4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
