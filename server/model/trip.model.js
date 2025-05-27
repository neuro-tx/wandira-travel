const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Trip title is required"],
      trim: true,
      minlength: [10, "Title must be at least 10 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [40, "Description must be at least 40 characters"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [100, "Minimum price is 100"],
    },
    seats: {
      type: Number,
      required: [true, "Seats count is required"],
      min: [50, "Minimum number of seats is 50"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
      default: "3 days",
    },
    bestTimeToVisit: {
      type: String,
      required: [true, "Best time to visit is required"],
      enum: {
        values: ["Spring", "Summer", "Fall", "Winter"],
        message: "{VALUE} is not a valid season",
      },
      trim: true,
    },
    images: {
      type: [String],
      default: [],
      validate: {
        validator: (arr) => arr.every((url) => typeof url === "string"),
        message: "Images must be an array of strings",
      },
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true,
    },
    trip_day: {
      type: Date,
    },
    interests: {
      type: [String],
      required: [true, "At least one interest is required"],
      validate: {
        validator: (arr) => arr.length > 0,
        message: "Interests cannot be empty",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// auto calculate the tripDay by the Duration
tripSchema.pre("save", function (next) {
  if (!this.trip_day && this.duration) {
    const match = this.duration.match(/(\d+)/);
    if (match) {
      const days = parseInt(match[1], 10);
      const today = new Date();
      this.trip_day = new Date(today.setDate(today.getDate() + days));
    }
  }
  next();
});

module.exports = mongoose.model("Trip", tripSchema);
