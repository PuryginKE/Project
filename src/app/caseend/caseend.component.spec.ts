import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseendComponent } from './caseend.component';

describe('CaseendComponent', () => {
  let component: CaseendComponent;
  let fixture: ComponentFixture<CaseendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
