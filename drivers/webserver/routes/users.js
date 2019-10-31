const usersDb = require("../../../data-access/users-db");
const debug = require('debug')('imdb-clone-api:userMiddleware')
const users = (module.exports = {});

users.create =  (req, res, next) => {
    usersDb.checkUserExists(req.body).then(data => {
    if (data) {
      userExists = true;
      res.send({statusCode: 400, error: 'User with email already exists, Please check your email'})
    }else{
      usersDb
      .createUser(req.body)
      .then(data => {
        debug('Created User '+ data.firstname);
        res.send(data);
      })
      .catch(next);
    }
  }).catch(next);
};
