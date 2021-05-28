import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitBnbComponent } from './transit-bnb.component';

describe('TransitBnbComponent', () => {
  let component: TransitBnbComponent;
  let fixture: ComponentFixture<TransitBnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitBnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitBnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
