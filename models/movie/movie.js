let buildMakeMovie = function(movieValidator) {
  return ({
    title,
    region,
    language,
    genre,
    year,
    actors,
    producers,
    directors
  } = {}) => {
    let {error} = movieValidator({title, region, language, genre, year, actors, producers, directors})
    if (error) throw error

    return {
      getTitle: () => title,
      getRegion: () => region,
      getLanguage: () => language,
      getGenre: () => genre,
      getYear: () => year,
      getActors: ()=> actors,
      getProducers: ()=> producers,
      getDirectors: ()=> directors
    }
  }
}

module.exports = buildMakeMovie;
