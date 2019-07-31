import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarrioPage } from './barrio.page';

describe('BarrioPage', () => {
  let component: BarrioPage;
  let fixture: ComponentFixture<BarrioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarrioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarrioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
