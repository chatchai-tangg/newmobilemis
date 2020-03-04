import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffreqPage } from './get-staffreq.page';

describe('GetStaffreqPage', () => {
  let component: GetStaffreqPage;
  let fixture: ComponentFixture<GetStaffreqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStaffreqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStaffreqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
