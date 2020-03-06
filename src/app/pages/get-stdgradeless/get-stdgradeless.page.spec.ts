import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStdgradelessPage } from './get-stdgradeless.page';

describe('GetStdgradelessPage', () => {
  let component: GetStdgradelessPage;
  let fixture: ComponentFixture<GetStdgradelessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStdgradelessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStdgradelessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
