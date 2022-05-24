const { Conflict } = require("http-errors");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const { User } = require("../models");

const checkUser = async (email) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }
};

const createPassword = asyncHandler(async (password) => {
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return hashPassword;
});

const comparePassword = asyncHandler(async (password, validPassword) => {
  return bcrypt.compareSync(password, validPassword);
});

const createToken = (user) => {
  const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
  return token;
};

module.exports = {
  checkUser,
  createPassword,
  comparePassword,
  createToken,
};
