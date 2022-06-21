const Joi = require("joi");

const userJoiSchema = Joi.object({
  password: Joi.string().required().messages({
    "string.empty": "password cannot be an empty field",
    "any.required": "missing required password field",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "email cannot be an empty field",
    "any.required": "missing required email field",
  }),
});

const verifySchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "email cannot be an empty field",
    "any.required": "missing required email field",
  }),
});

module.exports = {
  userJoiSchema,
  verifySchema,
};
