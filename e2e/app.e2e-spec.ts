import { DealersFrontPage } from './app.po';

describe('dealers-front App', () => {
  let page: DealersFrontPage;

  beforeEach(() => {
    page = new DealersFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
