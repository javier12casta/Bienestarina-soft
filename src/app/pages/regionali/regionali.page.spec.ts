import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionaliPage } from './regionali.page';

describe('RegionaliPage', () => {
  let component: RegionaliPage;
  let fixture: ComponentFixture<RegionaliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionaliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
