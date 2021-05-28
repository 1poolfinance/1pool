import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairsComponent } from './pairs.component';

describe('PairsComponent', () => {
  let component: PairsComponent;
  let fixture: ComponentFixture<PairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
