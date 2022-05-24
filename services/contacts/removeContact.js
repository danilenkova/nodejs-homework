const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const removeContact = asyncHandler(async (id, owner) => {
  const contact = await Contact.findOneAndRemove({ _id: id, owner });
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
});

module.exports = removeContact;
