import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffreqPage } from './add-staffreq.page';

describe('AddStaffreqPage', () => {
  let component: AddStaffreqPage;
  let fixture: ComponentFixture<AddStaffreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffreqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
