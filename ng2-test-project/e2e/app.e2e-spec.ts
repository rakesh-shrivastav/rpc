import { Ng2TestProjectPage } from './app.po';

describe('ng2-test-project App', () => {
  let page: Ng2TestProjectPage;

  beforeEach(() => {
    page = new Ng2TestProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
