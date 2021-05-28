import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPairComponent } from './view-pair.component';

describe('ViewPairComponent', () => {
  let component: ViewPairComponent;
  let fixture: ComponentFixture<ViewPairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
