export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'Required',
            'minlength': `Minimum length required ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length ${validatorValue.requiredLength}`,
            'invalidBookingCode' : 'Please enter a vaild booking code.',
            'invalidName' : 'Please enter a vaild Name.'
        };

        return config[validatorName];
    }

    static bookingCodeValidator(control) {
        if (control.value.match(/^[a-zA-Z2-9]*$/)) {
            return null;
        } else {
            return { 'invalidBookingCode': true };
        }
    }
    static nameValidator(control) {
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        } else {
            return { 'invalidName': true };
        }
    }
}
