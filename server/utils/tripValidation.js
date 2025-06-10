const Joi = require("joi");

const tripValidationSchema = Joi.object({
  country: Joi.string().trim().required(),

  duration: Joi.string().trim().required(),

  interest: Joi.string()
    .valid(
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
    .required(),

  style: Joi.string()
    .valid(
      "Relaxed",
      "Luxury",
      "Adventure",
      "Cultural",
      "Nature & Outdoors",
      "City Exploration"
    )
    .required(),

  groupType: Joi.string()
    .valid("Solo", "Couple", "Family", "Friends", "Business")
    .required(),
});

module.exports = tripValidationSchema;
