const asyncHandler = require("express-async-handler");

const { User } = require("../../models");

const { auth } = require("../../helpers");

const singup = asyncHandler(async ({ email, password }) => {
  await auth.checkUser(email);
  const hashPassword = await auth.createPassword(password);
  const avatarURL = await auth.createAvatar(email);
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });
  return newUser;
});

module.exports = singup;
