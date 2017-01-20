import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookings, BookingDetails } from '../booking.interface';
import { ValidationService } from '../error-message/validation.service';
import { Findtrip } from '../findtrip.service';

@Component({
  selector: 'app-find-booking',
  template: `
        <h1>{{heading}}</h1>
        <h2>{{heading2}}</h2>
        <form novalidate (ngSubmit)="onSubmit(bookings)" [formGroup]="bookings">
          <fieldset>
            <div class="form-group" >
              <label class="control-label" >Booking code</label>
              <input type="text" class="form-control" id="bookingcode" formControlName="code" />
              <app-error-message [control]="bookings.controls.code"></app-error-message>
            </div>
            <div class="form-group" >
              <label class="control-label" >Family name</label>
              <input type="text" class="form-control" id="lastname" formControlName="lastName"/>
              <app-error-message [control]="bookings.controls.lastName"></app-error-message>
            </div>
            <button type="submit" class="btn  btn-block submit-btn" [disabled]="bookings.invalid">
              Retrieve booking
            </button>
          </fieldset>
        </form>`
})
export class FindBookingComponent implements OnInit {
  heading = 'Retrieve Your Booking ';
  heading2 = 'You can find your booking by filling out your family name and the booking code in your booking confirmation.';  bookings: FormGroup;
  bookingDetails: BookingDetails;

  constructor(private findtrip: Findtrip,private router: Router) {
  }

  ngOnInit() {
    this.bookings = new FormGroup({
      code: new FormControl('PZIGZ3', [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(6),
        ValidationService.bookingCodeValidator]),
      lastName: new FormControl('HESP', [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        ValidationService.nameValidator])
    });
  }

  onSubmit({value, valid}: {value: Bookings, valid: boolean}) {
    if(valid){
      this.router.navigate(['/bookingdetails', value.code, value.lastName ]);
    }
  }
}
