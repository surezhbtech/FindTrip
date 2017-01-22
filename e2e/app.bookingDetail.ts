import { browser, element, by } from 'protractor';

export class BookingDetail {
  navigateTo() {
    browser.get('/bookingdetails');
  }

  getParagraphText() {
    browser.sleep(1000);
    return element(by.css('app-root h1')).getText();
  }
}
