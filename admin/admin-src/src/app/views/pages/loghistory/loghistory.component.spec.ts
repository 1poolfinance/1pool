import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoghistoryComponent } from './loghistory.component';

describe('LoghistoryComponent', () => {
  let component: LoghistoryComponent;
  let fixture: ComponentFixture<LoghistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoghistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
