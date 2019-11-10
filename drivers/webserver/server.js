const express = require('express');
var https = require('https');
var fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser')
const debug = require('debug')('imdb-clone-api:server')
const errorHandler = require('../../helpers/error-handler').default;
const authHandler = require('../../helpers/auth-handler');
const swaggerDoc = require('../../swagger/swaggerDoc').default;

import webpack from 'webpack';
import webpackConfig from '../../webpack.config.dev';
const compiler = webpack(webpackConfig);


const app = express()
const routes = require('./routes')
const config = require('../../config')

// webpack config for the edit
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath
}));


// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
swaggerDoc(app);
app.use(authHandler());

app.use(routes)
app.use(errorHandler);


app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '../views/index.html'));
})


const PORT = config.PORT || 3000

https.createServer({
  key: fs.readFileSync(path.resolve(__dirname,'../../security/imdb.key')),
  cert: fs.readFileSync(path.resolve(__dirname,'../../security/imdb.cert'))
}, app)
.listen(PORT, function () {
  debug(`IMDB Clone API listening on port ${PORT}! Go to https://localhost:3000/`);
})
