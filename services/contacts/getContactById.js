const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const getContactById = asyncHandler(async (id, owner) => {
  const contact = await Contact.findOne({ _id: id, owner }).populate(
    "owner",
    "_id email"
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  return contact;
});

module.exports = getContactById;
