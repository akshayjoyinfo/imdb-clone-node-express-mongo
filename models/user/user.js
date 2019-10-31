let buildMakeUser = function(userValidator) {
    return ({
      username,
      password,
      confirmPassword,
      firstname,
      lastname,
      email,
      createdat  = Date.now()
    } = {}) => {
      let {error} = userValidator({username, password, confirmPassword, firstname, lastname, email, createdat})
      if (error) throw error
  
      return {
        getUsername: () => username,
        getHash: () => password,
        getFirstname: () => firstname,
        getLastname: () => lastname,
        getEmail: () => email,
        getCreatedAt: ()=> createdat,
      }
    }
  }
  
  module.exports = buildMakeUser;