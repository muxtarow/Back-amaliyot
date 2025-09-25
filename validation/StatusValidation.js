const Joi = require("joi");

const validateStatus = (statusData) => {
    const schema = Joi.object({
        status: Joi.string().required(),
    });
    return schema.validate(statusData);
};

module.exports = { validateStatus };
