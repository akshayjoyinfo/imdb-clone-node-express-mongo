let Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));
let crewSchema = require('../crew/crew-schema')

module.exports = Joi.object().keys({
  title: Joi.string().min(1).max(100).required(),
  region: Joi.string().min(1).max(100).required(),
  language: Joi.string().min(1).max(50).required(),
  genre: Joi.array().items(Joi.string().min(1).max(50).required()).min(1).required(),
  year: Joi.date().format('YYYY-MM-DD').required(),
  createdat: Joi.date().optional(),
  actors: Joi.array().items(crewSchema).min(1).required(),
  producers: Joi.array().items(crewSchema).min(1).required(),
  directors:Joi.array().items(crewSchema).min(1).required(),
})
