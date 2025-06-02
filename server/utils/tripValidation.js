const Joi = require("joi");

const activitySchema = Joi.object({
  time: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
});

const daySchema = Joi.object({
  day: Joi.number().min(1).required(),
  location: Joi.string().trim().required(),
  activities: Joi.array().items(activitySchema).min(1).required(),
});

const tripValidationSchema = Joi.object({
  title: Joi.string().trim().min(10).required().messages({
    "string.min": "Title must be at least 10 characters",
    "any.required": "Trip title is required",
  }),

  description: Joi.string().trim().min(40).required().messages({
    "string.min": "Description must be at least 40 characters",
    "any.required": "Description is required",
  }),

  duration: Joi.string().trim().required(),

  bestTimeToVisit: Joi.array()
    .items(Joi.string().trim().required())
    .min(1)
    .messages({
      "array.min": "At least one season/time is required",
      "string.empty": "Season/time cannot be empty",
    }),

  images: Joi.array()
    .items(Joi.string().uri().message("Each image must be a valid URL"))
    .optional(),

  location: Joi.string().trim().required(),

  country: Joi.string().trim().required(),

  interests: Joi.array()
    .items(
      Joi.string().valid(
        "Food & Culinary",
        "Historical Sites",
        "Hiking & Nature Walks",
        "Beaches & Water Activities",
        "Museums & Art",
        "Nightlife & Bars",
        "Photography Spots",
        "Shopping",
        "Local Experiences"
      )
    )
    .min(1)
    .required(),

  travelStyles: Joi.string()
    .valid(
      "Relaxed",
      "Luxury",
      "Adventure",
      "Cultural",
      "Nature & Outdoors",
      "City Exploration"
    )
    .required(),

  groupTypes: Joi.string()
    .valid("Solo", "Couple", "Family", "Friends", "Business")
    .required(),

  itinerary: Joi.array().items(daySchema).min(1).required(),
});

module.exports = tripValidationSchema;
