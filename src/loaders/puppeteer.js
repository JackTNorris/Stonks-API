const puppeteer = require('puppeteer');

module.exports = puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
