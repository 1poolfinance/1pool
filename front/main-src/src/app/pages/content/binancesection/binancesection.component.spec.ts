import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinancesectionComponent } from './binancesection.component';

describe('BinancesectionComponent', () => {
  let component: BinancesectionComponent;
  let fixture: ComponentFixture<BinancesectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinancesectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinancesectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
