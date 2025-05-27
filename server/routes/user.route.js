const express = require("express");
const {
  getAllUsers,
  addUser,
  getUserById,
  updateUserData,
  deleteUser,
} = require("../controller/user.controller");
const validateUser = require("../middleware/validationUser");
const userRouter = express.Router();

userRouter.route("/")
  .get(getAllUsers)
  .post(validateUser ,addUser);

userRouter.route("/:id")
  .get(getUserById)
  .patch(updateUserData)
  .delete(deleteUser)

module.exports = userRouter;
