import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddataPage } from './adddata.page';

describe('AdddataPage', () => {
  let component: AdddataPage;
  let fixture: ComponentFixture<AdddataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
