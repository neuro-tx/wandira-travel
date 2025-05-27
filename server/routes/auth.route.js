const express = require("express");
const authRouter = express.Router();
const { register, login } = require("../controller/auth.controller");
const validateUser = require("../middleware/validationUser");

authRouter.route("/sign-in").post(validateUser, register);
authRouter.route("/login").post(login);

module.exports = authRouter;
