import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStddistfacPage } from './get-stddistfac.page';

describe('GetStddistfacPage', () => {
  let component: GetStddistfacPage;
  let fixture: ComponentFixture<GetStddistfacPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStddistfacPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStddistfacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
