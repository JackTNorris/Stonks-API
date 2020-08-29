const puppeteer = require('puppeteer');
const url = "https://finance.yahoo.com/quote/t/key-statistics?ltr=1";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
export const getEbitda = async (ticker, res) => {
    puppeteer.launch({headless: true}).then(async browser => {
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
        }).catch(err => res.send(err))
    }).catch(err => res.send(err));
}