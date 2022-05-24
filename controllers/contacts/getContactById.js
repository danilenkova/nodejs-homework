const { contacts: service } = require("../../services");

const getContactById = async (req, res) => {
  const result = await service.getContactById(
    req.params.contactId,
    req.user._id
  );
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getContactById;
