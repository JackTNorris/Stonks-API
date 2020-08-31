const puppeteer = require('puppeteer');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = async (ticker, res/*, year*/) => {
    /*
    if(year.toString().toLowerCase() === "all")
    {
        
    }
    */
    puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    .then(async browser => {
      let page = await browser.newPage();
      page.setViewport({ width: 1366, height: 768 });
      const timeout = 30000;
      const url = `https://ycharts.com/companies/${ticker}/free_cash_flow_ttm`;
      await page.goto(url, {waitUntil: 'load'});
  
      page.content().then((html) => {
        const dom = new JSDOM(html);
        let table = dom.window.document.getElementsByClassName('histDataTable');
        let startIndex = 1;
        let x = table[0].getElementsByClassName('col1');
        let y = table[1].getElementsByClassName('col2');
        let returnStr = "";
        for(let i = startIndex; i < x.length; i++)
        {
            returnStr += (`${x[i].textContent}  |  ${y[i].textContent.trim(' ')}`) + "</br>";
        }
        res.send(returnStr);
      }).catch(err => res.send("ERROR AT POINT 1a"))
    }).catch(err => res.send("ERROR AT POINT 2a"));
}
