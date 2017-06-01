import { BinariksPage } from './app.po';

describe('binariks App', () => {
  let page: BinariksPage;

  beforeEach(() => {
    page = new BinariksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
