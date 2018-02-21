import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchbankComponent } from './switchbank.component';

describe('SwitchbankComponent', () => {
  let component: SwitchbankComponent;
  let fixture: ComponentFixture<SwitchbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
