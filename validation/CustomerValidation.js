const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    hashed_password: Joi.string().required(),
    email: Joi.string().email(),
    birth_date: Joi.string(),
    gender_id: Joi.number(),
    lang_id: Joi.number(),
    hashed_refresh_token: Joi.string(),
  });
  return schema.validate(customer);
};

module.exports = { validateCustomer };
