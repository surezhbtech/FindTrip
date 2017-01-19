import { FindTripPage } from './app.po';

describe('find-trip App', function() {
  let page: FindTripPage;
  //let bookingDetails: FindTripPage;

  beforeEach(() => {
    page = new FindTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('RETRIEVE YOUR BOOKING');
  });

  fit('Navigate and check validation',()=>{
    page.navigateTo();
    page.fillBookingCodeAndLastName('ABC','Suresh');
    expect(page.getErrorMessage()).toEqual('Minimum length required 5');
  })
});
