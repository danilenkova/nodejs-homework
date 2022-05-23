const { contacts: services } = require("../../services");

const updateContact = async (req, res) => {
  const result = await services.updateContact(
    req.params.contactId,
    req.user._id,
    req.body
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContact;
