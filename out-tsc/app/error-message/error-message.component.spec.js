import { async, TestBed } from '@angular/core/testing';
import { ErrorMessageComponent } from './error-message.component';
describe('ErrorMessageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ErrorMessageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ErrorMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/Suresh/Documents/WorkTrails/FindTrip/src/app/error-message/error-message.component.spec.js.map