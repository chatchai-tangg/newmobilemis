import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffdisteduPage } from './staffdistedu.page';

describe('StaffdisteduPage', () => {
  let component: StaffdisteduPage;
  let fixture: ComponentFixture<StaffdisteduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffdisteduPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffdisteduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
