import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftvehComponent } from './shiftveh.component';

describe('ShiftvehComponent', () => {
  let component: ShiftvehComponent;
  let fixture: ComponentFixture<ShiftvehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftvehComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftvehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
