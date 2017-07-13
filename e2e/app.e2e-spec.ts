import { HeroSheetPage } from './app.po';

describe('hero-sheet App', () => {
  let page: HeroSheetPage;

  beforeEach(() => {
    page = new HeroSheetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
