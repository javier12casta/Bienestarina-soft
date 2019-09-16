import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoentregaiPage } from './puntoentregai.page';

describe('PuntoentregaiPage', () => {
  let component: PuntoentregaiPage;
  let fixture: ComponentFixture<PuntoentregaiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntoentregaiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntoentregaiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
