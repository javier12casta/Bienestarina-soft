import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrozonalPage } from './centrozonal.page';

describe('CentrozonalPage', () => {
  let component: CentrozonalPage;
  let fixture: ComponentFixture<CentrozonalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentrozonalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrozonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
