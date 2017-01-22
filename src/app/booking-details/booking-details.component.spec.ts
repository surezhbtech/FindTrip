/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingDetailsComponent} from './booking-details.component';
import {Findtrip} from '../findtrip.service';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';
import {Observable, BehaviorSubject} from 'rxjs';
import {BookingDetails} from '../booking.interface';
import {Injectable} from '@angular/core';

@Injectable()
class RouterStub {
  navigate(commands: any[], extras?: NavigationExtras) {
  }
}

class MockFindTrip {

  getTrip(code: string, lastname: string): Observable<BookingDetails> {
    let mockData = require('../mock.json');
    return Observable.create(observer => {
      observer.next(mockData);
      observer.complete();
    });
  }
}

@Injectable()
class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  // Test parameters
  private _testParams: {};
  get testParams() {
    return this._testParams;
  }

  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }

  // ActivatedRoute.snapshot.params
  get snapshot() {
    return {params: this.testParams};
  }
}

describe('BookingDetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;
  let activatedRoute: ActivatedRouteStub;
  activatedRoute = new ActivatedRouteStub();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookingDetailsComponent],
      providers: [{provide: Findtrip, useClass: MockFindTrip},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: Router, useClass: RouterStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute.testParams = {code: 'ABCDEF', lastName: 'TEST'};
    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create booking details Page and validate Field Values', () => {
    expect(component.heading).toBe('Booking Details');
  });
});
