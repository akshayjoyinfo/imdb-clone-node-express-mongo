const _serializeSingle = (user) => {
    return {
      'id': user._id,
      'hash': user.hash,
      'username': user.username,
      'firstname': user.firstname,
      'lastname': user.lastname,
      'email': user.email
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