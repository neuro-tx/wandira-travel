const Joi = require("joi");

const tripValidationSchema = Joi.object({
  title: Joi.string().trim().min(10).required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title is required",
    "string.min": "Title must be at least 10 characters",
  }),

  description: Joi.string().trim().min(40).required().messages({
    "string.base": "Description must be a string",
    "string.empty": "Description is required",
    "string.min": "Description must be at least 40 characters",
  }),

  price: Joi.number().min(100).required().messages({
    "number.base": "Price must be a number",
    "number.min": "Minimum price is 100",
    "any.required": "Price is required",
  }),

  seats: Joi.number().min(50).required().messages({
    "number.base": "Seats must be a number",
    "number.min": "Minimum number of seats is 50",
    "any.required": "Seats count is required",
  }),

  duration: Joi.string()
    .trim()
    .pattern(/^\d+\s+(days|nights)$/i)
    .required()
    .messages({
      "string.base": "Duration must be a string",
      "string.empty": "Duration is required",
      "string.pattern.base":
        "Duration must be in format like '5 days' or '3 nights'",
    }),

  bestTimeToVisit: Joi.string()
    .valid("Spring", "Summer", "Fall", "Winter")
    .required()
    .messages({
      "any.only":
        "Best time to visit must be one of: Spring, Summer, Fall, Winter",
      "any.required": "Best time to visit is required",
    }),

  images: Joi.array()
    .items(Joi.string().uri().message("Each image must be a valid URL"))
    .messages({
      "array.base": "Images must be an array of strings (URLs)",
    }),

  location: Joi.string().trim().required().messages({
    "string.base": "Location must be a string",
    "string.empty": "Location is required",
  }),

  country: Joi.string().trim().required().messages({
    "string.base": "Country must be a string",
    "string.empty": "Country is required",
  }),

  trip_day: Joi.date().optional(), // optional: set by pre-save hook if missing

  interests: Joi.array().items(Joi.string().trim()).min(1).required().messages({
    "array.base": "Interests must be an array of strings",
    "array.min": "At least one interest is required",
  }),
});

module.exports = tripValidationSchema;
