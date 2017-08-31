import { MockPage } from './app.po';

describe('mock App', function() {
  let page: MockPage;

  beforeEach(() => {
    page = new MockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
