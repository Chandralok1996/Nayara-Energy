import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinaryPdpComponent } from './refinary-pdp.component';

describe('RefinaryPdpComponent', () => {
  let component: RefinaryPdpComponent;
  let fixture: ComponentFixture<RefinaryPdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinaryPdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinaryPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
