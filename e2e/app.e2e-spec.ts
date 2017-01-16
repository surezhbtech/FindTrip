import { FindTripPage } from './app.po';

describe('find-trip App', function() {
  let page: FindTripPage;

  beforeEach(() => {
    page = new FindTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('RETRIEVE YOUR BOOKING');
  });
});
