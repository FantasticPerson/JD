/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModCountComponent } from './mod-count.component';

describe('ModCountComponent', () => {
  let component: ModCountComponent;
  let fixture: ComponentFixture<ModCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
