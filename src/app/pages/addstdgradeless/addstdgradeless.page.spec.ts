import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstdgradelessPage } from './addstdgradeless.page';

describe('AddstdgradelessPage', () => {
  let component: AddstdgradelessPage;
  let fixture: ComponentFixture<AddstdgradelessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstdgradelessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstdgradelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
