const { users: services } = require("../../services");

const singup = async (req, res) => {
  const result = await services.signup(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
        avatarURL: result.avatarURL,
        verificationToken: result.verificationToken,
      },
    },
  });
};

module.exports = singup;
