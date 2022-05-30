const { users: services } = require("../../services");

const sendEmail = async (req, res) => {
  await services.sendEmail(req.body.email);
  res.status(201).json({
    status: "success",
    code: 200,
    message: "Verification email sent",
  });
};

module.exports = sendEmail;
