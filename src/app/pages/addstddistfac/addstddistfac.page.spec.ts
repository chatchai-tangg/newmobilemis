import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstddistfacPage } from './addstddistfac.page';

describe('AddstddistfacPage', () => {
  let component: AddstddistfacPage;
  let fixture: ComponentFixture<AddstddistfacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstddistfacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstddistfacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
