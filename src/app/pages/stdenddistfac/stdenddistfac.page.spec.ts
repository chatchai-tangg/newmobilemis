import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdenddistfacPage } from './stdenddistfac.page';

describe('StdenddistfacPage', () => {
  let component: StdenddistfacPage;
  let fixture: ComponentFixture<StdenddistfacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdenddistfacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdenddistfacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
