import { JDPage } from './app.po';

describe('jd App', function() {
  let page: JDPage;

  beforeEach(() => {
    page = new JDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
