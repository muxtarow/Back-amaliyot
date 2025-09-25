const Joi = require("joi");

const validateVenue_VenueValidation = (venue) => {
    const schema = Joi.object({
        venueId: Joi.number(),
        venueTypeId: Joi.number(),
    });

    return schema.validate(venue);
};

module.exports = { validateVenue_VenueValidation };