import { Component } from '@angular/core';
import { FindBookingComponent } from './find-booking/find-booking.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Check-In';
  heading = 'Retrieve Your Booking';
  heading2 = 'You can find your booking by filling out your family name and the booking code in your booking confirmation.';
}
