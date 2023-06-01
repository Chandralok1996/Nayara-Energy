import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Isbl2Component } from './isbl2.component';

describe('Isbl2Component', () => {
  let component: Isbl2Component;
  let fixture: ComponentFixture<Isbl2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Isbl2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Isbl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
