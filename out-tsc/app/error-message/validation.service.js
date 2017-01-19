export var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'minlength': "Minimum length required " + validatorValue.requiredLength,
            'maxlength': "Maximum length " + validatorValue.requiredLength,
            'invalidBookingCode': 'Please enter a vaild booking code.',
            'invalidName': 'Please enter a vaild Name.'
        };
        return config[validatorName];
    };
    ValidationService.bookingCodeValidator = function (control) {
        if (control.value.match(/^[a-zA-Z2-9]*$/)) {
            return null;
        }
        else {
            return { 'invalidBookingCode': true };
        }
    };
    ValidationService.nameValidator = function (control) {
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        }
        else {
            return { 'invalidName': true };
        }
    };
    return ValidationService;
}());
//# sourceMappingURL=/Users/Suresh/Documents/WorkTrails/FindTrip/src/app/error-message/validation.service.js.map