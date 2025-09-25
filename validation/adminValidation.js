const Joi = require("joi");

const validateAdmin = (admin) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        login: Joi.string().min(3).required(),
        hashed_password: Joi.string().min(3).required(),
        is_active: Joi.boolean().required(),
        is_creator: Joi.boolean().required(),
        hashed_refresh_token: Joi.string().required(),
    });

    return schema.validate(admin);
};

module.exports = { validateAdmin };