import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stdgradeless2Page } from './stdgradeless2.page';

describe('Stdgradeless2Page', () => {
  let component: Stdgradeless2Page;
  let fixture: ComponentFixture<Stdgradeless2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stdgradeless2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stdgradeless2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
