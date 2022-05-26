const { users: service } = require("../../services");

const updateAvatar = async (req, res) => {
  const avatarURL = await service.updateAvatar(req.file, req.user._id);
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        avatarURL,
      },
    },
  });
};

module.exports = updateAvatar;
