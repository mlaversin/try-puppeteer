const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  console.log('browser ok');

  const page = await browser.newPage();
  console.log('page ok');

  await (await page).goto('https://fr.wikipedia.org/wiki/Node.js');
  console.log('website ok');

  await page.setViewport({
    width: 1200,
    height: 800,
  });
  console.log('size ok');

  //   await page.screenshot({
  //     path: 'screen.png',
  //   });
  //   console.log('screen ok');

  await page.pdf({
    path: 'screen.pdf',
    format: 'A4',
  });
  console.log('pdf ok');
})().catch(err => console.log(err.message));
