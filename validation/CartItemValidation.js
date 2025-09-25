const Joi = require("joi");

const validateCartItem = (cartItem) => {
  const schema = Joi.object({
    ticket_id: Joi.number().integer().required(),
    cart_id: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
  });
  return schema.validate(cartItem);
};

module.exports = { validateCartItem };
