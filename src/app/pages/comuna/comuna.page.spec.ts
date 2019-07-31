import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunaPage } from './comuna.page';

describe('ComunaPage', () => {
  let component: ComunaPage;
  let fixture: ComponentFixture<ComunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
