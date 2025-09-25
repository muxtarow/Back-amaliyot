const Joi = require("joi");

const validateDelivery = (delivery) => {
  const schema = Joi.object({
    name: Joi.string().min(1).required(),
  });
  return schema.validate(delivery);
};

module.exports = { validateDelivery };
