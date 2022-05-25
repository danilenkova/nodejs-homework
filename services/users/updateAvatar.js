const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");

const publicDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (file, _id) => {
  const { path: tmpUpload, originalname } = file;
  const newName = `${_id}_${originalname}`;

  const image = await Jimp.read(tmpUpload);
  image.resize(250, 250).write(tmpUpload);

  try {
    const resultUpload = path.join(publicDir, newName);
    await fs.rename(tmpUpload, resultUpload);
    const avatarURL = path.join("public", "avatars", newName);
    await User.findByIdAndUpdate(
      _id,
      { avatarURL },
      {
        new: true,
      }
    );
    return avatarURL;
  } catch (error) {
    await fs.unlink(tmpUpload);
    throw error;
  }
};

module.exports = updateAvatar;
