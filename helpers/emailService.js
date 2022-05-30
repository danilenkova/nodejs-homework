const nodemailer = require("nodemailer");
const { BadRequest } = require("http-errors");
const nodemailerConfig = require("../config");

const { MAIL_SENDER } = process.env;

const transporter = nodemailer.createTransport(nodemailerConfig);

const emailService = async (user) => {
  const { email, verificationToken } = user;
  const link = `http://localhost:3000/api/users/verify/`;
  const message = {
    to: email,
    from: MAIL_SENDER,
    subject: "Please confirm your email address",
    html: `<a href="${link}${verificationToken}">Click to confirm your email</a>`,
  };

  try {
    await transporter
      .sendMail(message)
      .then(() => console.log("Email send success"))
      .catch((error) => console.log(error.message));
    return true;
  } catch (error) {
    throw new BadRequest("Something went wrong");
  }
};

module.exports = emailService;
