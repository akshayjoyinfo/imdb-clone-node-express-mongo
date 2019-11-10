let buildMakeCrew = require('./movie')
let crewSchema = require('./crew-schema')
let crewValidator = require('../validator/')(crewSchema)

let makeCrew = buildMakeCrew(crewValidator)

module.exports = makeCrew
