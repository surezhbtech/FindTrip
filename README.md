# FindTrip

This app is show case of angular2 application which accepts booking code and last name in the first page and show corresponding booking information at the booking details page.

## Technical Overview

### Find Booking Component (find-booking)

Find booking component (find-booking) is the Recactive form component which gets the inputs(booking code, last name) and submits the result to booking details component.

### Booking Details Component (booking-details)

Booking Details component (booking-details) gets the user input values from the url query parameter and hits the service (findtrip.service) to show the booking details.

### Error Message Component (error-message)

Error Message component is to show the form errors or it can be used across the application to show errors to the user. In this application the error message component is only used inside Find booking component. 

### Find Trip Service (findtrip.service)

Find Trip service has only one method getTrip(bookingcode: string, lastname: string) which takes booking code and lastname as input parameters and serves the booking details as result.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

