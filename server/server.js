const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// export routes
const userRouter = require("./routes/user.route");
const handler = require("./middleware/errorHandler");
const tripRouter = require("./routes/trip.route");
const bookingRouter = require("./routes/booking.route");
const authRouter = require("./routes/auth.route");
const refreshRoute = require("./routes/refresh.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/trip", tripRouter);
app.use("/api/v1/booking", bookingRouter);
app.use("/api/refresh" ,refreshRoute)

app.use(handler);

app.listen(process.env.PORT, () => {
  console.log(`Server run in port:${process.env.PORT}`);

  mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Database Connected Successfully."))
    .catch((err) => console.log("error in conection with DB: ", err.message));
});
