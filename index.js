const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const puppeteer = require('puppeteer');
const getEbitda = require('./src/services/ebitda.js');

/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

getEbitda = async (ticker, res) => {
  puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    .then(async browser => {
      let page = await browser.newPage();
      page.setViewport({ width: 1366, height: 768 });
      const timeout = 30000;
      const url = `https://finance.yahoo.com/quote/${ticker}/key-statistics?ltr=1`;
      await page.goto(url, {waitUntil: 'load'});
  
      page.content().then((html) => {
          const dom = new JSDOM(html);
          let tempArr = dom.window.document.getElementsByClassName('Fw(500) Ta(end) Pstart(10px) Miw(60px)');
          const ebitda = tempArr[38].textContent;
          res.send(ebitda);
          //console.log(tempArr[38].textContent);
      }).catch(err => res.send("ERROR AT POINT 1"))
  }).catch(err => res.send("ERROR AT POINT 2"));
}
*/

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs') 
  .get('/', async (req, res) => await getEbitda(req.query.ticker, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
