import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogattemptsComponent } from './logattempts.component';

describe('LogattemptsComponent', () => {
  let component: LogattemptsComponent;
  let fixture: ComponentFixture<LogattemptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogattemptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogattemptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
