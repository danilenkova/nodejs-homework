const { users: services } = require("../../services");

const logout = async (req, res) => {
  await services.logout(req.user._id);
  res.status(204).json({
    status: "success",
    code: 204,
  });
};

module.exports = logout;
