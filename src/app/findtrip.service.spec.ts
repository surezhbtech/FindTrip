/**
 * Created by Suresh on 21/01/2017.
 */
import {
  async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Findtrip as FindtripService } from './findtrip.service';

describe('Http-FindtripService (mockBackend)', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        FindtripService,
        {provide: XHRBackend, useClass: MockBackend}
      ]
    })
      .compileComponents();
  }));

  it('can instantiate service when inject service',
    inject([FindtripService], (service: FindtripService) => {
      expect(service instanceof FindtripService).toBe(true);
    }));

  it('can instantiate service with "new"', inject([Http], (http: Http) => {
    expect(http).not.toBeNull('http should be provided');
    let service = new FindtripService(http);
    expect(service instanceof FindtripService).toBe(true, 'new service should be ok');
  }));

  it('can provide the mockBackend as XHRBackend',
    inject([XHRBackend], (backend: MockBackend) => {
      expect(backend).not.toBeNull('backend should be provided');
  }));

  describe('when getTrip', () => {
    let backend: MockBackend;
    let service: FindtripService;
    let response: Response;

    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
      backend = be;
      service = new FindtripService(http);
      let options = new ResponseOptions({status: 200, body: {"bookingCode": "ABCDE"}});
      response = new Response(options);
    }));

    it('should have expected fake trip data (Observable.do)', async(inject([], () => {
      backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

      service.getTrip('sdsdf','sf')
        .do(res => {
          expect(res.bookingCode).toBe("ABCDE",
            'should have expected booking code ABCDE');
        })
        .toPromise();
    })));

  });
});
