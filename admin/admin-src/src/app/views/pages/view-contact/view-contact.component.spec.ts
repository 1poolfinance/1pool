import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactComponent } from './view-contact.component';

describe('ViewContactComponent', () => {
  let component: ViewContactComponent;
  let fixture: ComponentFixture<ViewContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
