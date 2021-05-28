import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePatternComponent } from './change-pattern.component';

describe('ChangePatternComponent', () => {
  let component: ChangePatternComponent;
  let fixture: ComponentFixture<ChangePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
