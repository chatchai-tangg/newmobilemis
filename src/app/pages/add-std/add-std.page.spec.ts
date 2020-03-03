import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStdPage } from './add-std.page';

describe('AddStdPage', () => {
  let component: AddStdPage;
  let fixture: ComponentFixture<AddStdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
