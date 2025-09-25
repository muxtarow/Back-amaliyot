const Joi = require("joi");

const validateBooking = (booking) => {
    const schema = Joi.object({
        cart_id: Joi.number().integer().required(),
        createdAt: Joi.string().required(),
        finishedAt: Joi.string(),
        payment_method_id: Joi.number().integer().required(),
        delivery_method_id: Joi.number().integer().required(),
        discount_coupon_id: Joi.number().integer().optional(),
        status_id: Joi.number().integer().required(),
    });

    return schema.validate(booking);
};

module.exports = { validateBooking };
