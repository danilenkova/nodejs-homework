const { users: services } = require("../../services");

const login = async (req, res) => {
  const { user, token } = await services.login(req.body);
  res.json({
    status: "success",
    code: 200,
    data: {
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    },
  });
};

module.exports = login;
