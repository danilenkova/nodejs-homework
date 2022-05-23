const { contacts: service } = require("../../services");

const removeContact = async (req, res) => {
  await service.removeContact(req.params.contactId, req.user._id);
  res.json({
    status: "success",
    code: 200,
    message: "Contact deleted",
  });
};

module.exports = removeContact;
