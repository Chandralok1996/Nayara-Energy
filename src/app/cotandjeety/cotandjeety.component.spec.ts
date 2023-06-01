import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotandjeetyComponent } from './cotandjeety.component';

describe('CotandjeetyComponent', () => {
  let component: CotandjeetyComponent;
  let fixture: ComponentFixture<CotandjeetyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotandjeetyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotandjeetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
