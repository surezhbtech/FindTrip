import { async, TestBed } from '@angular/core/testing';
import { FindBookingComponent } from './find-booking.component';
describe('FindBookingComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [FindBookingComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(FindBookingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/Suresh/Documents/WorkTrails/FindTrip/src/app/find-booking/find-booking.component.spec.js.map