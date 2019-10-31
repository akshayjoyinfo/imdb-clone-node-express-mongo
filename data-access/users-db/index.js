const User = require('../../db/mongodb/models/user')
const makeUser = require('../../models/user/index') // model
const serialize = require('./serializer') // serializer custom to db
const bcrypt = require('bcryptjs');
const debug = require('debug')('imdb-clone-api:userDb')


const listUsers = () => {
  return User.find({})
    .then(serialize)
}

const findUser = (prop, val) => {
  if (prop === 'id') {
    prop = '_id'
  }
  return User.find({[prop]: val})
    .then(resp => {
      return serialize(resp[0])
    })
}

const findUsersBy = (prop, val) => {
  return User.find({[prop]: val})
    .then(serialize)
}

const createUser = (userInfo) => {
  let user = makeUser(userInfo)
  let newUser = {
    username: user.getUsername(),
    firstname: user.getFirstname(),
    lastname: user.getLastname(),
    hash: bcrypt.hashSync(user.getHash(), 10),
    email: user.getEmail(),
    createdAt: user.getCreatedAt()
  }

  return User.create(newUser)
    .then(serialize)
}

const checkUserExists = (userInfo) => {
  let user = makeUser(userInfo)
  let newUser = {
    email: user.getEmail(),
  }

  return findUser('email', newUser.email);
}


module.exports = {
  listUsers,
  findUser,
  findUsersBy,
  createUser,
  checkUserExists
}