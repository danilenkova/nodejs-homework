const { Unauthorized } = require("http-errors");
const asyncHandler = require("express-async-handler");
const { User } = require("../../models");
const { auth } = require("../../helpers");

const login = asyncHandler(async ({ email, password }) => {
  const user = await User.findOne({ email });
  const comparePassword = await auth.comparePassword(password, user.password);
  if (!user || !comparePassword) {
    throw new Unauthorized("Email or password is wrong");
  }
  if (!user.verify) {
    throw new Unauthorized("User not verified");
  }
  const token = auth.createToken(user);
  await User.findByIdAndUpdate(
    user._id,
    { token },
    {
      new: true,
      runValidators: true,
    }
  );
  return { user, token };
});

module.exports = login;
