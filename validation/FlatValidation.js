const Joi = require("joi");

const validateFlat = (flat) => {
    const schema = Joi.object({
        etaj: Joi.number().integer().required(),
        condition: Joi.string().optional(),
    });
    return schema.validate(flat);
};

module.exports = { validateFlat };
