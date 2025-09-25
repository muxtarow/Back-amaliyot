const Joi = require("joi");

const validateCustomerAddress = (address) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().required(),
    country_id: Joi.number().integer(),
    region_id: Joi.number().integer(),
    district_id: Joi.number().integer(),
    street: Joi.string().optional(),
    home: Joi.string().optional(),
    flat_id: Joi.number().integer(),
    landmark: Joi.string(),
    postal_index: Joi.string(),
    info: Joi.string(),
  });
  return schema.validate(address);
};

module.exports = { validateCustomerAddress };
