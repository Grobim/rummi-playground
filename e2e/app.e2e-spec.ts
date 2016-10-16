import { RummiPlaygroundPage } from './app.po';

describe('rummi-playground1 App', function() {
  let page: RummiPlaygroundPage;

  beforeEach(() => {
    page = new RummiPlaygroundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
