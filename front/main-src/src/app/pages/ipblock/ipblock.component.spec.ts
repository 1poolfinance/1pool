import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpblockComponent } from './ipblock.component';

describe('IpblockComponent', () => {
  let component: IpblockComponent;
  let fixture: ComponentFixture<IpblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
