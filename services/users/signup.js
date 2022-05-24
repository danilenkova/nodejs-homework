const asyncHandler = require("express-async-handler");

const { User } = require("../../models");

const { auth } = require("../../helpers");

const singup = asyncHandler(async ({ email, password }) => {
  await auth.checkUser(email);
  const hashPassword = await auth.createPassword(password);
  const newUser = await User.create({ email, password: hashPassword });
  return newUser;
});

module.exports = singup;
