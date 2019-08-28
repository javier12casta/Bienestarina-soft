import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdsPage } from './uds.page';

describe('UdsPage', () => {
  let component: UdsPage;
  let fixture: ComponentFixture<UdsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
