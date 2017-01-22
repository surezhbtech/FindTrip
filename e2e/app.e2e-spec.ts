import { FindTripPage } from './app.po';
import { BookingDetail } from "./app.bookingDetail";

describe('find-trip App', function() {
  let page: FindTripPage;
  let detailsPage : BookingDetail
  //let bookingDetails: FindTripPage;

  beforeEach(() => {
    page = new FindTripPage();
    detailsPage = new BookingDetail();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('RETRIEVE YOUR BOOKING');
  });

  it('Navigate and check validation',()=>{
    page.navigateTo();
    page.fillBookingCodeAndLastName('ABC','Suresh');
    expect(page.getErrorMessage()).toEqual('Minimum length required 5');
  })
  it('Navigate and check validation booking code',()=>{
    page.navigateTo();
    page.fillBookingCodeAndLastName('ABCD1','Suresh');
    expect(page.getErrorMessage()).toEqual('Please enter a vaild booking code.');
  })

  it('Navigate and check validation lastname',()=>{
    page.navigateTo();
    page.fillBookingCodeAndLastName('ABCDE','as 1');
    expect(page.getErrorMessage()).toEqual('Please enter a vaild Name.');
  })
  it('Navigate and check validation booking details',()=>{
    page.navigateTo();
    page.fillBookingCodeAndLastName('ABCDE','Suresh');
    expect(detailsPage.getParagraphText()).toEqual('BOOKING DETAILS');
  })
});
