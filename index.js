const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const puppeteer = require('puppeteer');
const getEbitda = require('./src/services/ebitda.js');
const getHistoricalFCF = require('./src/services/fcf.js');
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send("Welcome to Jack's Stonks API!")) 
  .get('/ebitda', async (req, res) => await getEbitda(req.query.ticker, res))
  .get('/histFCF', async (req, res) => await getHistoricalFCF(req.query.ticker, res))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
