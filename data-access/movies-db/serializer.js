const _serializeSingle = (movie) => {
  return {
    'id': movie._id,
    'title': movie.title,
    'region': movie.region,
    'language': movie.language,
    'genre': movie.genre
  };
};

const serializer = (data) => {
  if (!data) {
    return null
  }
  if (Array.isArray(data)) {
    return data.map(_serializeSingle)
  }
  return _serializeSingle(data)
}

module.exports = serializer
