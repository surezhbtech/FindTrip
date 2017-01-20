import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { FindBookingComponent } from './find-booking/find-booking.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { Findtrip } from './findtrip.service';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FindBookingComponent,
    ErrorMessageComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'findtrip',
        component: FindBookingComponent
      },
      {
        path: '',
        redirectTo: '/findtrip',
        pathMatch: 'full'
      },{
        path: 'bookingdetails/:code/:lastname',
        component: BookingDetailsComponent
      },
      {
        path: '**',
        redirectTo: '/findtrip',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [Findtrip],
  bootstrap: [AppComponent]
})
export class AppModule {
}
