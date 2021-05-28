import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesettingsComponent } from './sitesettings.component';

describe('SitesettingsComponent', () => {
  let component: SitesettingsComponent;
  let fixture: ComponentFixture<SitesettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
