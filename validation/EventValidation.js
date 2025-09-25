const Joi = require("joi");

const validateEvent = (event) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    photo: Joi.string().optional(),
    start_date: Joi.date().required(),
    start_time: Joi.date().required(), 
    finish_date: Joi.date().optional().allow(null),
    finish_time: Joi.date().optional().allow(null),
    info: Joi.string().optional(),
    event_type_id: Joi.number().integer().required(),
    human_category_id: Joi.number().integer().required(),
    venue_id: Joi.number().integer().required(),
    lang_id: Joi.number().integer().required(),
    release_date: Joi.date().optional().allow(null)
  });
  return schema.validate(event);
};

module.exports = { validateEvent };
