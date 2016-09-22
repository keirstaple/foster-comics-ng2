import { FosterComicsNg2Page } from './app.po';

describe('foster-comics-ng2 App', function() {
  let page: FosterComicsNg2Page;

  beforeEach(() => {
    page = new FosterComicsNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
