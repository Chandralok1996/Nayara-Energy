import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftempComponent } from './shiftemp.component';

describe('ShiftempComponent', () => {
  let component: ShiftempComponent;
  let fixture: ComponentFixture<ShiftempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
