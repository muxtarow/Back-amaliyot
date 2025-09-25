const Joi = require("joi");

const validateCustomerCard = (card) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    phone: Joi.string(),
    number: Joi.string().required(),
    year: Joi.number().integer().required(),
    month: Joi.number().integer().required(),
    is_active: Joi.boolean(),
  });
  return schema.validate(card);
};

module.exports = { validateCustomerCard };
