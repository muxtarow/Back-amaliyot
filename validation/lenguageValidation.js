const Joi = require("joi");
const validatelenguage = (lang) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    });

    return schema.validate(lang);
};

module.exports = { validatelenguage };