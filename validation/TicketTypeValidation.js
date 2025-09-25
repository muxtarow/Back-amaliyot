const Joi = require("joi");

const validateTicketType = (ticketType) => {
    const schema = Joi.object({
        color: Joi.string().required(),
        name: Joi.string().required()
    });
    return schema.validate(ticketType);
};

module.exports = { validateTicketType };
