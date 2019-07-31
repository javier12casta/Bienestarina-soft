import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipioPage } from './municipio.page';

describe('MunicipioPage', () => {
  let component: MunicipioPage;
  let fixture: ComponentFixture<MunicipioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
