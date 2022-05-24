const asyncHandler = require("express-async-handler");
const { User } = require("../../models");

const logout = asyncHandler(async (id) => {
  await User.findByIdAndUpdate({ _id: id }, { token: null });
});

module.exports = logout;
