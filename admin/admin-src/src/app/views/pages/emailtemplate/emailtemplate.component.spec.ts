import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtemplateComponent } from './emailtemplate.component';

describe('EmailtemplateComponent', () => {
  let component: EmailtemplateComponent;
  let fixture: ComponentFixture<EmailtemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
