let Joi = require('@hapi/joi')

module.exports = Joi.object().keys({
  username: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(8).max(20).required().error(() => "\"Password\" should not be empty"),
  confirmPassword: Joi.ref('password'),
  createdat: Joi.date().optional(),
  firstname: Joi.string().min(3).max(50).required(),
  lastname: Joi.string().min(3).max(50).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required()
})
