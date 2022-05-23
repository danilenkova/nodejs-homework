const asyncHandler = require("express-async-handler");
const { User } = require("../../models");

const updateSubscription = asyncHandler(async (id, subscription) => {
  const user = await User.findOneAndUpdate({ _id: id }, subscription, {
    new: true,
    runValidators: true,
  });
  return user;
});

module.exports = updateSubscription;
