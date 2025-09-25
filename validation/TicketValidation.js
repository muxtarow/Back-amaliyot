const Joi = require("joi");

const validateTicket = (ticket) => {
  const schema = Joi.object({
    event_id: Joi.number().integer().required(),
    seat_id: Joi.number().integer().required(),
    price: Joi.number().precision(2).required(),
    service_fee: Joi.number().precision(2).required(),
    status_id: Joi.number().integer().required(),
    ticket_type: Joi.number().integer().required()
  });
  return schema.validate(ticket);
};

module.exports = { validateTicket };
