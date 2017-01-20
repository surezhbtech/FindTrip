import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Findtrip } from '../findtrip.service';
import { BookingDetails } from '../booking.interface';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  heading = 'Booking Details';
  private sub: any;
  bookingDetails: BookingDetails;

  constructor(private findtrip: Findtrip,
              private route: ActivatedRoute,
              private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      const code = params['code'];
      const lastname = params['lastname'];
      if (code) {
        this.findtrip.getTrip(code, lastname).subscribe(
          bookingDetails => {
            this.bookingDetails = bookingDetails;
            console.log(this.bookingDetails);
          },
          err => {
            console.log(err);
          });
      }
      else {
        this.router.navigate(['/findtrip'])
      }
    });
  }

  ngOnInit() {

  }

}
