var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';
export var ErrorMessageComponent = (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ErrorMessageComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(), 
        __metadata('design:type', FormControl)
    ], ErrorMessageComponent.prototype, "control", void 0);
    ErrorMessageComponent = __decorate([
        Component({
            selector: 'app-error-message',
            template: "<span aria-live=\"assertive\" class=\"error\" *ngIf=\"errorMessage !== null\">{{errorMessage}}</span>",
            styles: ["\n        .error{\n            color: #d40504;\n        }"]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());
//# sourceMappingURL=/Users/Suresh/Documents/WorkTrails/FindTrip/src/app/error-message/error-message.component.js.map