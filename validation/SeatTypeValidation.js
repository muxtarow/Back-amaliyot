const Joi = require("joi");

const validateSeatType = (seat_type) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(seat_type);
};

module.exports = { validateSeatType };