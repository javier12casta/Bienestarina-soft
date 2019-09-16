import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioliPage } from './barrioli.page';

describe('BarrioliPage', () => {
  let component: BarrioliPage;
  let fixture: ComponentFixture<BarrioliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrioliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
