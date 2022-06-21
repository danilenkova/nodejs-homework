const asyncHandler = require("express-async-handler");
const { nanoid } = require("nanoid");

const { User } = require("../../models");

const { auth, emailService } = require("../../helpers");

const signup = asyncHandler(async ({ email, password }) => {
  await auth.checkUser(email);
  const hashPassword = await auth.createPassword(password);
  const avatarURL = await auth.createAvatar(email);
  const verificationToken = await nanoid();
  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });
  await emailService(newUser);
  return newUser;
});

module.exports = signup;
