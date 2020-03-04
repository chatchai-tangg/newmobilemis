import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStafftrainPage } from './add-stafftrain.page';

describe('AddStafftrainPage', () => {
  let component: AddStafftrainPage;
  let fixture: ComponentFixture<AddStafftrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStafftrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStafftrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
