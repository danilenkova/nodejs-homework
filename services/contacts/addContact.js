const asyncHandler = require("express-async-handler");
const { Contact } = require("../../models");

const addContact = asyncHandler(async (params) => {
  const contact = await Contact.create(params);
  return contact;
});

module.exports = addContact;
