const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

modules.exports = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.send('HA HA HA, HOPEFULLY THIS WORKS'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))