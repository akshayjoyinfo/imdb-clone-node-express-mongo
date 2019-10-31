const express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser')
const debug = require('debug')('imdb-clone-api:server')
const errorHandler = require('../../helpers/error-handler');
const authHandler = require('../../helpers/auth-handler');

const app = express()
const routes = require('./routes')
const config = require('../../config')

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authHandler());

app.use(routes)
app.use(errorHandler); 


app.get('/', function (req, res) {
  res.send('hello world')
})


const PORT = config.PORT || 3000

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname,'../../security/imdb.key')),
  cert: fs.readFileSync(path.resolve(__dirname,'../../security/imdb.cert'))
}, app)
.listen(PORT, function () {
  debug(`IMDB Clone API listening on port ${PORT}! Go to https://localhost:3000/`);
})