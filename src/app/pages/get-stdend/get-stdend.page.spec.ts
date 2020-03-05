import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStdendPage } from './get-stdend.page';

describe('GetStdendPage', () => {
  let component: GetStdendPage;
  let fixture: ComponentFixture<GetStdendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetStdendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStdendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
