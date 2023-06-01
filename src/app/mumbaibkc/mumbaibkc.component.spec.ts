import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MumbaibkcComponent } from './mumbaibkc.component';

describe('MumbaibkcComponent', () => {
  let component: MumbaibkcComponent;
  let fixture: ComponentFixture<MumbaibkcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MumbaibkcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MumbaibkcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
