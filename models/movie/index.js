let buildMakeUser = require('./movie')
let movieSchema = require('./movie-schema')
let movieValidator = require('../validator/')(movieSchema)

let makeMovie = buildMakeUser(movieValidator)

module.exports = makeMovie
