import { createMovie } from "../../../data-access/movies-db";
const debug = require('debug')('imdb-clone-api:movieMiddleware')

const movies = (module.exports = {});


movies.createMovie = (req, res, next) => {
  createMovie(req.body)
  .then(data => {
    debug('Created movie '+ data.title);
    res.send(data);
  })
  .catch(next);
}

movies.healthCheck = (req, res) => {
  res.json({message: 'All is healthy'})
}
