const Joi = require("joi");

const validateCart = (cart) => {
    const schema = Joi.object({
        customer_id: Joi.number().integer().required(),
        createdAt: Joi.date().required(),
        finishedAt: Joi.date().optional().allow(null),
        status_id: Joi.number().integer().required(),
    });

    return schema.validate(cart);
};

module.exports = { validateCart };
