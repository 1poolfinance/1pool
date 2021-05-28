import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmBnbComponent } from './farm-bnb.component';

describe('FarmBnbComponent', () => {
  let component: FarmBnbComponent;
  let fixture: ComponentFixture<FarmBnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmBnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmBnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
