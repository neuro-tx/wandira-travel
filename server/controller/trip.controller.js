const Trip = require("../model/trip.model");
const asyncWrapper = require("../middleware/asyncWrapper");
const dataform = require("../utils/dataForm");

const getAllTrips = asyncWrapper(async (req, res) => {
  const trips = await Trip.find();
  if (!trips) {
    res.status(404).json(dataform("faild", 404, "no users found"));
  }
  return res
    .status(200)
    .json(dataform("success", 200, "successfully operation", trips));
});

const addTrip = asyncWrapper(async (req, res) => {
  const newTrip = await Trip.create(req.body);
  if (!newTrip) {
    res
      .status(404)
      .json(dataform("faild", 4000, "falid to add trip ,try again"));
  }
  return res
    .status(201)
    .json(dataform("success", 200, "trip added successfully", newTrip));
});

const getTripById = asyncWrapper(async (req, res) => {
  const trips = await Trip.findById(req.params.id)
  if (!trips) res.status(404).json(dataform("faild", 404, "invalid trip id"));

  res
    .status(200)
    .json(dataform("success", 200, "successfully operation", trips));
});

const updateTrip = asyncWrapper(async (req, res) => {
  const tripData = await Trip.findByIdAndUpdate(req.params.id, {
    ...req.body,
  });
  if (!tripData)
    res.status(404).json(dataform("faild", 404, "invalid trip data"));

  res
    .status(201)
    .json(dataform("success", 201, "trip updated successfully", tripData));
});

const deleteTrip = asyncWrapper(async (req, res) => {
  const delTrip = await Trip.deleteOne({ _id: req.params.id });

  res.status(201).json(dataform("success", 201, "trip deleted successfully"));
});

module.exports = {
  getAllTrips,
  addTrip,
  getTripById,
  updateTrip,
  deleteTrip
};
