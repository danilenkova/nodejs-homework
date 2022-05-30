const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { User } = require("../../models");

const verifyUser = asyncHandler(async (verificationToken) => {
  const user = await User.findOne({ verificationToken });
  if (!user) {
    throw new NotFound(
      "User not found or Verification has already been passed"
    );
  }
  await User.updateOne(
    { _id: user._id },
    { verificationToken: null, verify: true }
  );
  return user;
});

module.exports = verifyUser;
