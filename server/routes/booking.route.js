const express = require("express");
const {
  getAllBookings,
  addBooking,
  getBookingById,
  updateBook,
  deleteBook,
} = require("../controller/booking.controller");
const bookingRouter = express.Router();
const validateBooking = require("../middleware/validationBooking");

bookingRouter.route("/")
  .get(getAllBookings)
  .post(validateBooking ,addBooking);

bookingRouter
  .route("/:id")
  .get(getBookingById)
  .put(validateBooking ,updateBook)
  .delete(deleteBook);

module.exports = bookingRouter;
