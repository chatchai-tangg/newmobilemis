import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffReqpositionPage } from './staff-reqposition.page';

describe('StaffReqpositionPage', () => {
  let component: StaffReqpositionPage;
  let fixture: ComponentFixture<StaffReqpositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffReqpositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffReqpositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
