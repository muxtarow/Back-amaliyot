const Joi = require("joi");
const validateEventType = (eventType) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(eventType);
};

module.exports = { validateEventType };