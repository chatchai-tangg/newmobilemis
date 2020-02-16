import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffscholarPage } from './staffscholar.page';

describe('StaffscholarPage', () => {
  let component: StaffscholarPage;
  let fixture: ComponentFixture<StaffscholarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffscholarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffscholarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
