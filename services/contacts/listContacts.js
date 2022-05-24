const asyncHandler = require("express-async-handler");
const { NotFound } = require("http-errors");
const { Contact } = require("../../models");

const listContacts = asyncHandler(async (id, page, limit, favorite) => {
  const skip = (page - 1) * limit;
  let contacts = null;
  let totalContacts = null;
  if (!favorite) {
    contacts = await Contact.find({ owner: id }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email");
    totalContacts = await Contact.count({ owner: id });
  } else if (favorite === "true" || favorite === "false") {
    contacts = await Contact.find({ owner: id, favorite }, "", {
      skip,
      limit: Number(limit),
    }).populate("owner", "_id email");
    totalContacts = await Contact.count({ owner: id });
  }

  if (!contacts) {
    throw new NotFound("Contacts not found");
  }
  return { contacts, totalContacts };
});

module.exports = listContacts;
