const { users: services } = require("../../services");

const singup = async (req, res) => {
  const result = await services.singup(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email: result.email,
        subscription: result.subscription,
      },
    },
  });
};

module.exports = singup;
