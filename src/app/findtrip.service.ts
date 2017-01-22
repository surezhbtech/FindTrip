import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BookingDetails } from './booking.interface';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Findtrip {
  private apiUrl = 'mock.json';

  constructor(private http: Http) {
  }

  getTrip(bookingcode: string, lastname: string): Observable<BookingDetails> {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
