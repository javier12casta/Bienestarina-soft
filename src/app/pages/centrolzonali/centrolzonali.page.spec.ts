import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrolzonaliPage } from './centrolzonali.page';

describe('CentrolzonaliPage', () => {
  let component: CentrolzonaliPage;
  let fixture: ComponentFixture<CentrolzonaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrolzonaliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrolzonaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
