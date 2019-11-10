const Movie = require('../../db/mongodb/models/movie')
const Crew = require('../../db/mongodb/models/crew')
const maekMovie = require('../../models/movie/index') // model
const serialize = require('./serializer') // serializer custom to db
const debug = require('debug')('imdb-clone-api:movieDb')


const createMovie = (movieInfo) => {
  let movie = maekMovie(movieInfo)

  // let crewActors = movie.getActors();
  // let crewProducers = movie.getProducers();
  // let crewDirectors = movie.getDirectors();

  // Crew.create([crewActors, crewProducers, crewDirectors]).then(data);

  const newMovie = new Movie({
    title: movie.getTitle(),
    region: movie.getRegion(),
    language: movie.getLanguage(),
    genre: movie.getGenre(),
    year: movie.getYear()
  });


  movie.getActors().forEach(element => {
    const actorCrew = new Crew({
      firstname: element.firstname,
      lastname: element.lastname,
      dob: element.dob,
      region: element.region
    })
    actorCrew.movies.push(newMovie);
    newMovie.actors.push(actorCrew);
    actorCrew.save();
  });

  debug('sved actors')
  movie.getProducers().forEach(element => {
    const producerCrew = new Crew({
      firstname: element.firstname,
      lastname: element.lastname,
      dob: element.dob,
      region: element.region
    })
    producerCrew.movies.push(newMovie);
    newMovie.producers.push(producerCrew);
    producerCrew.save();
  });
  debug('sved producers')

  movie.getDirectors().forEach(element => {
    const directorCrew = new Crew({
      firstname: element.firstname,
      lastname: element.lastname,
      dob: element.dob,
      region: element.region
    })
    directorCrew.movies.push(newMovie);
    newMovie.directors.push(directorCrew);
    directorCrew.save();
  });

  debug('sved directors')
  return newMovie.save()
    .then(serialize);
}


module.exports = {
  createMovie
}
