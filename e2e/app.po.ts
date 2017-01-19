import {browser, element, by} from 'protractor';

export class FindTripPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }

    fillBookingCodeAndLastName(bookingCode: string, lastName: string) {
        element(by.id('bookingcode')).sendKeys(bookingCode);
        element(by.id('lastname')).sendKeys(lastName);
        element(by.css('.submit-btn')).click();
        browser.sleep(6000);
    }

    getErrorMessage(){
        return element(by.css('.error')).getText();
    }
}
