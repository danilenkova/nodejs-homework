const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const updateContact = asyncHandler(async (id, user, data) => {
  const contact = await Contact.findByIdAndUpdate(
    { _id: id, owner: user },
    data,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`);
  }
  return contact;
});

module.exports = updateContact;
