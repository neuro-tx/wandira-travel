const Joi = require("joi");

const userValidationSchema = Joi.object({
  first_name: Joi.string()
    .required()
    .messages({ "any.required": "first name is required" }),

  last_name: Joi.string()
    .required()
    .messages({ "any.required": "last name is required" }),

  email: Joi.string()
    .email()
    .min(5)
    .required()
    .messages({ "any.required": "email is required" }),

  password: Joi.string()
    .min(5)
    .required()
    .messages({ "any.required": "password is required" }),

  image: Joi.string().optional(),

  birth_day: Joi.date()
    .iso()
    .required()
    .messages({ "any.required": "birth day is required" }),

  role: Joi.string().valid("admin", "user").default("user"),

  phone: Joi.string().min(11).optional(),

  gender: Joi.string().valid("male", "female").default("male"),

  trips: Joi.array()
    .items(Joi.string().hex().length(24))
    .optional(),
});

module.exports = userValidationSchema;
