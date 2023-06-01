import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtlComponent } from './otl.component';

describe('OtlComponent', () => {
  let component: OtlComponent;
  let fixture: ComponentFixture<OtlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
