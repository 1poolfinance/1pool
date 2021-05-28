import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthereumsectionComponent } from './ethereumsection.component';

describe('EthereumsectionComponent', () => {
  let component: EthereumsectionComponent;
  let fixture: ComponentFixture<EthereumsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthereumsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthereumsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
