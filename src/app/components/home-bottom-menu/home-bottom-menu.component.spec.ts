import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomMenuComponent } from './home-bottom-menu.component';

describe('HomeBottomMenuComponent', () => {
  let component: HomeBottomMenuComponent;
  let fixture: ComponentFixture<HomeBottomMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBottomMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
