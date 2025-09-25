const Joi = require("joi");

const validateVenue = (venue) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
        location: Joi.string().min(3).required(),
        site: Joi.string().min(3).required(),
        phone: Joi.string().min(3).required(),
        schema: Joi.string().min(3).required(),
        regionId: Joi.number(),
        districtId: Joi.number(),
    });

    return schema.validate(venue);
};

module.exports = { validateVenue };