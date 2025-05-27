const asyncWrapper = require("../middleware/asyncWrapper");
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const dataform = require("../utils/dataForm");
const genrateToken = require("../utils/genrateToken");

const register = asyncWrapper(async (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    image,
    birth_day,
    phone,
    gender,
  } = req.body;

  const checkUser = await User.findOne({ email });
  if (checkUser) {
    return res.status(400).json(dataform("faild", 400, "invalid user data"));
  }

  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    first_name,
    last_name,
    email,
    password: hashPwd,
    image,
    birth_day,
    phone,
    gender,
  });

  const token = genrateToken({
    id: newUser._id,
    role: newUser.role,
  });

  const refreshToken = genrateToken(
    {
      id: newUser._id,
      role: newUser.role,
    },
    "refresh",
    "refresh"
  );

  res.cookie("refresh-token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json(
    dataform("success", 201, "user successfully added", {
      token,
      _id: newUser._id,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      phone: newUser.phone,
      role: newUser.role,
      gender: newUser.gender,
      image: newUser.image,
      birth_day: newUser.birth_day,
      trips: newUser.trips,
    })
  );
});

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return res.status(404).json(dataform("faild", 404, "invalid email"));
  }
  
  const pwdComapre = await bcrypt.compare(password, checkUser.password);
  if (!pwdComapre) {
    return res.status(400).json(dataform("faild", 400, "invalid password"));
  }

  const token = genrateToken({
    id: checkUser._id,
    role: checkUser.role,
  });

  const refreshToken = genrateToken(
    {
      id: checkUser._id,
      role: checkUser.role,
    },
    "refresh",
    "refresh"
  );

  res.cookie("refresh-token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json(
    dataform("success", 200, "user loged in successfully", {
      token,
      _id: checkUser._id,
      first_name: checkUser.first_name,
      last_name: checkUser.last_name,
      email: checkUser.email,
      phone: checkUser.phone,
      gender: checkUser.gender,
      image: checkUser.image,
      birth_day: checkUser.birth_day,
      trips: checkUser.trips,
    })
  );

  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = { register, login };
