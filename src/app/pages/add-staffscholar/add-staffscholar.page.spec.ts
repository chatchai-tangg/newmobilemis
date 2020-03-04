import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffscholarPage } from './add-staffscholar.page';

describe('AddStaffscholarPage', () => {
  let component: AddStaffscholarPage;
  let fixture: ComponentFixture<AddStaffscholarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffscholarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffscholarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
