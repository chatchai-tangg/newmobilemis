import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStdPage } from './get-std.page';

describe('GetStdPage', () => {
  let component: GetStdPage;
  let fixture: ComponentFixture<GetStdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
