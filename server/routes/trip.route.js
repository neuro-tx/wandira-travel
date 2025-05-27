const express = require("express");
const validateTrip = require("../middleware/validationTrip");
const tripRouter = express.Router();
const {
  getAllTrips,
  addTrip,
  getTripById,
  updateTrip,
  deleteTrip,
} = require("../controller/trip.controller");

tripRouter.route("/")
  .get(getAllTrips)
  .post(validateTrip, addTrip);

tripRouter.route("/:id")
  .get(getTripById)
  .patch(updateTrip)
  .delete(deleteTrip)

module.exports = tripRouter;
