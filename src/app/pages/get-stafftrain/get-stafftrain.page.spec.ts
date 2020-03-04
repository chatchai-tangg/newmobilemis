import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStafftrainPage } from './get-stafftrain.page';

describe('GetStafftrainPage', () => {
  let component: GetStafftrainPage;
  let fixture: ComponentFixture<GetStafftrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStafftrainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStafftrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
