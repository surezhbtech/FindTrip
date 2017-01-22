import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Bookings, BookingDetails } from '../booking.interface';
import { ValidationService } from '../error-message/validation.service';

@Component({
  selector: 'app-find-booking',
  templateUrl: './find-booking.component.html',
  styleUrls: ['./find-booking.component.css']
})
export class FindBookingComponent implements OnInit {
  heading = 'Retrieve Your Booking ';
  heading2 = 'You can find your booking by filling out your family name and the booking code in your booking confirmation.';
  bookings: FormGroup;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.bookings = new FormGroup({
      code: new FormControl('PZ6GZ3', [Validators.required,
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
    if (valid) {
      this.router.navigate(['/bookingdetails', value.code, value.lastName ]);
    }
  }
}
