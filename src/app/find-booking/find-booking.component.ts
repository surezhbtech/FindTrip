import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingCode } from '../booking-code'
@Component({
  selector: 'find-booking',
  templateUrl: './find-booking.component.html',
  styleUrls: ['./find-booking.component.css']
})
export class FindBookingComponent implements OnInit {
    bookings: FormGroup;
    constructor() { }
    ngOnInit() {
        this.bookings = new FormGroup({
            code: new FormControl('', [Validators.required, Validators.minLength(5)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(2)])
        });
    }
    onSubmit({ value, valid }: { value: BookingCode, valid: boolean }) {
        console.log(value, valid);
    }
}
