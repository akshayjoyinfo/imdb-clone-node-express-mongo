
const Joi = require('@hapi/joi')

const validator = (schema) =>
  (payload) => {
    let {error} = Joi.validate(payload, schema, {abortEarly: false})
    if (error) {
      return {
        error: error
      }
    }
    return true
  }

module.exports = validator
