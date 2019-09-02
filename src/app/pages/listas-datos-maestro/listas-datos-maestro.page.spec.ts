import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasDatosMaestroPage } from './listas-datos-maestro.page';

describe('ListasDatosMaestroPage', () => {
  let component: ListasDatosMaestroPage;
  let fixture: ComponentFixture<ListasDatosMaestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListasDatosMaestroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasDatosMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
