import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefGateComponent } from './ref-gate.component';

describe('RefGateComponent', () => {
  let component: RefGateComponent;
  let fixture: ComponentFixture<RefGateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefGateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
