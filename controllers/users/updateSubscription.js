const { users: services } = require("../../services");

const updateSubscription = async (req, res) => {
  const result = await services.updateSubscription(req.user._id, req.body);
  res.json({
    status: "success",
    cose: 200,
    data: {
      result,
    },
  });
};

module.exports = updateSubscription;
