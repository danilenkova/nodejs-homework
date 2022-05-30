const { MAIL_SENDER, MAIL_PASSWORD, MAIL_HOST, MAIL_PORT } = process.env;

const nodemailerConfig = {
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: MAIL_SENDER,
    pass: MAIL_PASSWORD,
  },
};

module.exports = nodemailerConfig;
