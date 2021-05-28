import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeBnbComponent } from './stake-bnb.component';

describe('StakeBnbComponent', () => {
  let component: StakeBnbComponent;
  let fixture: ComponentFixture<StakeBnbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeBnbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeBnbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
