import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantarea1Component } from './plantarea1.component';

describe('Plantarea1Component', () => {
  let component: Plantarea1Component;
  let fixture: ComponentFixture<Plantarea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plantarea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plantarea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
