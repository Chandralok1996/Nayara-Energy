import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftmgmtComponent } from './shiftmgmt.component';

describe('ShiftmgmtComponent', () => {
  let component: ShiftmgmtComponent;
  let fixture: ComponentFixture<ShiftmgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftmgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftmgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
