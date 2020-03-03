import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffdistfacPage } from './add-staffdistfac.page';

describe('AddStaffdistfacPage', () => {
  let component: AddStaffdistfacPage;
  let fixture: ComponentFixture<AddStaffdistfacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStaffdistfacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStaffdistfacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
