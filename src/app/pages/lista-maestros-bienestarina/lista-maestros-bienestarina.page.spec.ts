import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaestrosBienestarinaPage } from './lista-maestros-bienestarina.page';

describe('ListaMaestrosBienestarinaPage', () => {
  let component: ListaMaestrosBienestarinaPage;
  let fixture: ComponentFixture<ListaMaestrosBienestarinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMaestrosBienestarinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMaestrosBienestarinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
