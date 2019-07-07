import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcudientesPage } from './acudientes.page';

describe('AcudientesPage', () => {
  let component: AcudientesPage;
  let fixture: ComponentFixture<AcudientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcudientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcudientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
