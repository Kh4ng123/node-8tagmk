// these are just for the initial test, you will load real data in their place
const { testHtml, testPreview } = require('./test-data.js');

// fetch this page content for the link
// use this https://scrapfly.io/blog/web-scraping-with-puppeteer-and-nodejs/
const getHtml = (link) => {
  // todo get and return html
  return Promise.resolve(testHtml);
};

// fetch the page preview (title, image, etc)
// try this https://www.npmjs.com/package/link-preview-js
const getPreview = (link) => {
  // todo return the link preview data
  return Promise.resolve(testPreview);
};

const indexPage = async (link) => {
  const [html, preview] = await Promise.all([getHtml(link), getPreview(link)]);

  console.log('PREVIEW', preview);
  console.log('HTML', html);
};

indexPage(
  'https://stackoverflow.com/questions/72603999/configure-jest-preset-angular-with-angular-workspace'
);

// run the page with: node index.js
