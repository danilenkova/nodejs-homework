const Jimp = require("jimp");

const resize = async (filePath) => {
  const image = await Jimp.read(filePath);
  image.resize(250, 250).write(filePath);
  return filePath;
};

module.exports = resize;

// exports.resize = async (filePath) => {
//   const image = await Jimp.read(filePath);
//   image.cover(250, 250).write(filePath);
//   return filePath;
// };
