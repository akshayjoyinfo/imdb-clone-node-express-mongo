const config = require('../../config')
const mongoose = require('mongoose');
const debug = require('debug')('imdb-clone-api:IMDB-Mongo-Connection');

// Use ES6 Promises for mongoose
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
// Set environment variables
let env = process.env.NODE_ENV;

if (env === 'production') {
  // Using mongoose to connect to MLAB database (Create new database single node free and create new user and set name and password)
  const username = config.mongo.MONGO_USER
  const password = config.mongo.MONGO_PW
  mongoose.connect(`mongodb://${username}:${password}@ds161630.mlab.com:61630/${config.mongo.MONGO_DB}`)
} else {

    mongoose.connect(`mongodb://${config.mongo.MONGO_HOST}:${config.mongo.MONGO_PORT}/${config.mongo.MONGO_DB}`), {
        useMongoClient: true,
    };
}

// Signal connection
mongoose.connection.once('open', function () {
    debug('Connection has been made sucessfully');
}).on('error', function (error) {
    debug('IMDB Mongo Database::Connect error', error);
}).on('disconnected', function () {
    debug('IMDB Mongo Database::Connection disconnected');
})

module.exports = mongoose
