const Joi = require("joi");

const validateSector = (data) => {
    const schema = Joi.object({
        sector_name: Joi.string().min(2).required().messages({
            "string.base": "Sektor nomi matn bo‘lishi kerak",
            "string.min": "Sektor nomi kamida 2 ta belgidan iborat bo‘lishi kerak",
            "any.required": "Sektor nomi majburiy maydon",
        }),
    });

    return schema.validate(data);
};

module.exports = { validateSector };
