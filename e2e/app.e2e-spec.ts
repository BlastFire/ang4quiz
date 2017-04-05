import { Ang4FirstPage } from './app.po';

describe('ang4-first App', () => {
  let page: Ang4FirstPage;

  beforeEach(() => {
    page = new Ang4FirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
