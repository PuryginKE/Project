import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAukComponent } from './top-auk.component';

describe('TopAukComponent', () => {
  let component: TopAukComponent;
  let fixture: ComponentFixture<TopAukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
