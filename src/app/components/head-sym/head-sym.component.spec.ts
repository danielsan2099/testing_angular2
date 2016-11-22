/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeadSymComponent } from './head-sym.component';

describe('HeadSymComponent', () => {
  let component: HeadSymComponent;
  let fixture: ComponentFixture<HeadSymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadSymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
