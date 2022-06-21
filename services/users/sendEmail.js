const asyncHandler = require("express-async-handler");
const { BadRequest, NotFound } = require("http-errors");
const { emailService } = require("../../helpers");
const { User } = require("../../models");

const sendEmail = asyncHandler(async (email) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotFound("User not found");
  }
  if (user.verify) {
    throw new BadRequest("Verification has already been passed");
  }
  await emailService(user);
  return user;
});

module.exports = sendEmail;
