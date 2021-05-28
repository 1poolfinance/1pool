import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitComponent } from './transit.component';

describe('TransitComponent', () => {
  let component: TransitComponent;
  let fixture: ComponentFixture<TransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
