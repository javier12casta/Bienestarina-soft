import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregaPage } from './puntoentrega.page';

describe('PuntoentregaPage', () => {
  let component: PuntoentregaPage;
  let fixture: ComponentFixture<PuntoentregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
