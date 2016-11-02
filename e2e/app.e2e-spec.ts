import { BachonRequestPage } from './app.po';

describe('bachon-request App', function() {
  let page: BachonRequestPage;

  beforeEach(() => {
    page = new BachonRequestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
