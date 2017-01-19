var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../error-message/validation.service';
import { Findtrip } from '../findtrip.service';
export var FindBookingComponent = (function () {
    function FindBookingComponent(findtrip) {
        this.findtrip = findtrip;
    }
    FindBookingComponent.prototype.ngOnInit = function () {
        this.bookings = new FormGroup({
            code: new FormControl('', [Validators.required,
                Validators.minLength(5),
                Validators.maxLength(6),
                ValidationService.bookingCodeValidator]),
            lastName: new FormControl('', [Validators.required,
                Validators.minLength(2),
                Validators.maxLength(30),
                ValidationService.nameValidator])
        });
    };
    FindBookingComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value, valid);
        this.findtrip.getTrip().subscribe(function (bookingDetails) {
            _this.bookingDetails = bookingDetails;
            console.log(_this.bookingDetails.passengers);
        }, function (err) {
            console.log(err);
        });
    };
    FindBookingComponent = __decorate([
        Component({
            selector: 'app-find-booking',
            template: "\n        <form novalidate (ngSubmit)=\"onSubmit(bookings)\" [formGroup]=\"bookings\">\n          <fieldset>\n            <div class=\"form-group\" >\n              <label class=\"control-label\" >Booking code</label>\n              <input type=\"text\" class=\"form-control\" id=\"bookingcode\" formControlName=\"code\" />\n              <app-error-message [control]=\"bookings.controls.code\"></app-error-message>\n            </div>\n            <div class=\"form-group\" >\n              <label class=\"control-label\" >Family name</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastname\" formControlName=\"lastName\"/>\n              <app-error-message [control]=\"bookings.controls.lastName\"></app-error-message>\n            </div>\n            <button type=\"submit\" class=\"btn  btn-block submit-btn\" [disabled]=\"bookings.invalid\">\n              Retrieve booking\n            </button>\n          </fieldset>\n        </form>"
        }), 
        __metadata('design:paramtypes', [Findtrip])
    ], FindBookingComponent);
    return FindBookingComponent;
}());
//# sourceMappingURL=/Users/Suresh/Documents/WorkTrails/FindTrip/src/app/find-booking/find-booking.component.js.map