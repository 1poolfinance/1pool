import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmComponent } from './farm.component';

describe('FarmComponent', () => {
  let component: FarmComponent;
  let fixture: ComponentFixture<FarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
