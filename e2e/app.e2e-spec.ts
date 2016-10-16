import { RummiPlayground1Page } from './app.po';

describe('rummi-playground1 App', function() {
  let page: RummiPlayground1Page;

  beforeEach(() => {
    page = new RummiPlayground1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
