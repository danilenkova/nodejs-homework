const {
  ContactJoiSchema,
  updateJoiSchema,
  favoriteJoiSchema,
} = require("./contacts");
const { userJoiSchema, verifySchema } = require("./users");

module.exports = {
  ContactJoiSchema,
  updateJoiSchema,
  favoriteJoiSchema,
  userJoiSchema,
  verifySchema,
};
