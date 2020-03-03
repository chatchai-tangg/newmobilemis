import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffPage } from './add-staff.page';

describe('AddStaffPage', () => {
  let component: AddStaffPage;
  let fixture: ComponentFixture<AddStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
