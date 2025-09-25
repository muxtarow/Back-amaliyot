const Joi = require("joi");

const validateCountry = (country) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  return schema.validate(country);
};

module.exports = { validateCountry };
