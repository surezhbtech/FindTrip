import { browser, element, by } from 'protractor';

export class FindTripPage {
  navigateTo() {
    browser.sleep(1000);
    return browser.get('/');

  }

  getParagraphText() {
    browser.sleep(1000);
    return element(by.css('app-root h1')).getText();
  }

  fillBookingCodeAndLastName(bookingCode: string, lastName: string) {
    element(by.id('bookingcode')).clear();
    element(by.id('bookingcode')).sendKeys(bookingCode);
    element(by.id('lastname')).clear();
    element(by.id('lastname')).sendKeys(lastName);
    element(by.css('.submit-btn')).click();
    browser.sleep(1000);
  }

  getErrorMessage() {
    return element(by.css('.error')).getText();
  }
}
