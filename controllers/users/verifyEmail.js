const { users: services } = require("../../services");

const verifyEmail = async (req, res) => {
  await services.verifyEmail(req.params.verificationToken);
  res.json({
    status: "success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = verifyEmail;
