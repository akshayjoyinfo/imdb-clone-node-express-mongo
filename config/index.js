const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const debug = require('debug')('imdb-clone-api:ConfigENV');

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  mongo: {
    MONGO_DB: process.env.MONGO_DB,
    MONGO_HOST: process.env.MONGO_HOST,
    MONGO_PORT: process.env.MONGO_PORT
  }
}