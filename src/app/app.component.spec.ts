import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, inject, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FindBookingComponent } from './find-booking/find-booking.component';
import { AppModule } from './app.module';

describe('component: AppComponent', function () {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent },
          { path: 'findtrip', component: FindBookingComponent }
        ])
      ]
    });
  });

  it('should go to url',
    async(inject([Router, Location], (router: Router, location: Location) => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('');
        console.log('after expect');
      });
      fixture.detectChanges();
      router.navigate(['/findtrip']).then(() => {
        expect(location.path()).toBe('/findtrip');
      });
    })));
});
