import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffscholarPage } from './get-staffscholar.page';

describe('GetStaffscholarPage', () => {
  let component: GetStaffscholarPage;
  let fixture: ComponentFixture<GetStaffscholarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStaffscholarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStaffscholarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
