import { BlogApiPage } from './app.po';

describe('blog-api App', () => {
  let page: BlogApiPage;

  beforeEach(() => {
    page = new BlogApiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
