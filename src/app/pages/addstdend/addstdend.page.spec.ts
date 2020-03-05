import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstdendPage } from './addstdend.page';

describe('AddstdendPage', () => {
  let component: AddstdendPage;
  let fixture: ComponentFixture<AddstdendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstdendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstdendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
