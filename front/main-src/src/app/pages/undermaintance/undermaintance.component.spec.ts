import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermaintanceComponent } from './undermaintance.component';

describe('UndermaintanceComponent', () => {
  let component: UndermaintanceComponent;
  let fixture: ComponentFixture<UndermaintanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndermaintanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndermaintanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
