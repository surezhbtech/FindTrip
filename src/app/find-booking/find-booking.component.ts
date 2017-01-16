import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Bookings } from '../booking.interface';
import { ValidationService } from '../error-message/validation.service';
@Component({
  selector: 'app-find-booking',
  template: `
        <form novalidate (ngSubmit)="onSubmit(bookings)" [formGroup]="bookings">
          <fieldset>
            <div class="form-group" >
              <label class="control-label" >Booking code</label>
              <input type="text" class="form-control" formControlName="code" />
              <app-error-message [control]="bookings.controls.code"></app-error-message>
            </div>
            <div class="form-group" >
              <label class="control-label" >Family name</label>
              <input type="text" class="form-control" formControlName="lastName"/>
              <app-error-message [control]="bookings.controls.lastName"></app-error-message>
            </div>
            <button type="submit" class="btn  btn-block submit-btn" [disabled]="bookings.invalid">
              Retrieve booking
            </button>
          </fieldset>
        </form>`
})
export class FindBookingComponent implements OnInit {
    bookings: FormGroup;

    ngOnInit() {
        this.bookings = new FormGroup({
            code: new FormControl('', [Validators.required,
                Validators.minLength(5),
                Validators.maxLength(6),
                ValidationService.bookingCodeValidator]),
            lastName: new FormControl('', [Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
                ValidationService.nameValidator])
        });
    }
    onSubmit({ value, valid }: { value: Bookings, valid: boolean }) {
        console.log(value, valid);
    }
}
