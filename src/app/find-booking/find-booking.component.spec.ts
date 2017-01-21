/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { dispatchEvent } from '@angular/platform-browser/testing/browser_util';
import { FindBookingComponent } from './find-booking.component';
import { ErrorMessageComponent } from "../error-message/error-message.component";
import { Router } from "@angular/router";

describe('FindBookingComponent', () => {
  let component: FindBookingComponent;
  let fixture: ComponentFixture<FindBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ReactiveFormsModule],
      declarations: [FindBookingComponent, ErrorMessageComponent],
      providers:[{provide:Router}]
    }).compileComponents();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(FindBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('validating form', () => {
    fixture = TestBed.createComponent(FindBookingComponent);
    component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    let bookingcode = compiled.querySelector('#bookingcode');
    let lastname = compiled.querySelector('#lastname');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      bookingcode.value = 'sdfs2';
      bookingcode.dispatchEvent(new Event('input'),'blur');
      lastname.value = 'sdf';
      lastname.dispatchEvent(new Event('input'),'blur');
      fixture.detectChanges();
      expect(component.bookings.valid).toBe(true);
    });
  });

  it('error validating booking code', () => {
    fixture = TestBed.createComponent(FindBookingComponent);
    component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    let bookingcode = compiled.querySelector('#bookingcode');
    let lastname = compiled.querySelector('#lastname');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      bookingcode.value = 'sdfs1';
      bookingcode.dispatchEvent(new Event('input'),'blur');
      lastname.value = 'sd';
      lastname.dispatchEvent(new Event('input'),'blur');
      fixture.detectChanges();
      expect(compiled.querySelector('.error').textContent).toContain('Please enter a vaild booking code.');
      expect(component.bookings.valid).toBe(false);
    });
  });

  it('error validating lastname code', () => {
    fixture = TestBed.createComponent(FindBookingComponent);
    component = fixture.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    let bookingcode = compiled.querySelector('#bookingcode');
    let lastname = compiled.querySelector('#lastname');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      bookingcode.value = 'sdfs2';
      bookingcode.dispatchEvent(new Event('input'),'blur');
      lastname.value = 'sd fs2';
      lastname.dispatchEvent(new Event('input'),'blur');
      fixture.detectChanges();
      expect(compiled.querySelector('.error').textContent).toContain('Please enter a vaild Name.');
      expect(component.bookings.valid).toBe(false);
    });
  });
});
