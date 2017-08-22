import { ZipPage } from './app.po';

describe('zip App', () => {
  let page: ZipPage;

  beforeEach(() => {
    page = new ZipPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
