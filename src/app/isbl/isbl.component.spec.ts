import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsblComponent } from './isbl.component';

describe('IsblComponent', () => {
  let component: IsblComponent;
  let fixture: ComponentFixture<IsblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
