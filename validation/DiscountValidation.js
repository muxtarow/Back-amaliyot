const Joi = require("joi");

const validateDiscount = (discount) => {
  const schema = Joi.object({
    discount: Joi.number().integer().required(),
    finish_date: Joi.date().required(),
  });
  return schema.validate(discount);
};

module.exports = { validateDiscount };
