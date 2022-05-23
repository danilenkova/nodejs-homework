const { contacts: service } = require("../../services");

const listContacts = async (req, res) => {
  const { page = 1, limit = 20, favorite } = req.query;
  const { contacts, totalContacts } = await service.listContacts(
    req.user._id,
    page,
    limit,
    favorite
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      totalContacts,
      page,
      limit,
      result: contacts,
    },
  });
};

module.exports = listContacts;
