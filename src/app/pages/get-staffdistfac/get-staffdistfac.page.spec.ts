import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStaffdistfacPage } from './get-staffdistfac.page';

describe('GetStaffdistfacPage', () => {
  let component: GetStaffdistfacPage;
  let fixture: ComponentFixture<GetStaffdistfacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStaffdistfacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStaffdistfacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
