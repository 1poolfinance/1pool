import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockipComponent } from './blockip.component';

describe('BlockipComponent', () => {
  let component: BlockipComponent;
  let fixture: ComponentFixture<BlockipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
