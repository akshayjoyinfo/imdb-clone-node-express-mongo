let Joi = require('@hapi/joi').extend(require('@hapi/joi-date'));

module.exports = Joi.object().keys({
  firstname: Joi.string().min(1).max(100).required(),
  lastname: Joi.string().min(1).max(100).required(),
  dob: Joi.date().format('YYYY-MM-DD').required(),
  region: Joi.string().min(1).max(100).required(),
});
