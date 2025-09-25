const Joi = require("joi");

const validateHumanCategory = (humanCategory) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().integer().required(),
    finish_age: Joi.number().integer().required(),
    gender: Joi.string().valid("male", "female", "other").required(),
  });
  return schema.validate(humanCategory);
};

module.exports = { validateHumanCategory };
