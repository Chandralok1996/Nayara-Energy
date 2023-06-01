import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErtDashboardComponent } from './ert-dashboard.component';

describe('ErtDashboardComponent', () => {
  let component: ErtDashboardComponent;
  let fixture: ComponentFixture<ErtDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErtDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
