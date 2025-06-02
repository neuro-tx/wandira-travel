const express = require("express");
const authRouter = express.Router();
const { register, login } = require("../controller/auth.controller");
const { validateUser, validateLogin } = require("../middleware/validationUser");

authRouter.route("/sign-in").post(validateUser, register);
authRouter.route("/login").post(validateLogin, login);

module.exports = authRouter;
