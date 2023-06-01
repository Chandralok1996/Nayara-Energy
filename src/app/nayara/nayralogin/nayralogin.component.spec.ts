import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NayraloginComponent } from './nayralogin.component';

describe('NayraloginComponent', () => {
  let component: NayraloginComponent;
  let fixture: ComponentFixture<NayraloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NayraloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NayraloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
