import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaliPage } from './comunali.page';

describe('ComunaliPage', () => {
  let component: ComunaliPage;
  let fixture: ComponentFixture<ComunaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunaliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
