const Joi = require("joi");

const ContactJoiSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s'’ʼ-]{3,30}$/)
    .required()
    .messages({
      "string.empty": "name cannot be an empty field",
      "any.required": "missing required name field",
    }),
  email: Joi.string().email().required().messages({
    "string.empty": "email cannot be an empty field",
    "any.required": "missing required email field",
  }),
  phone: Joi.string()
    .pattern(/^[0-9()+\s-]{10,19}$/)
    .required()
    .messages({
      "string.empty": "phone cannot be an empty field",
      "any.required": "missing required phone field",
    }),
  favorite: Joi.boolean(),
});

const updateJoiSchema = Joi.object({
  name: Joi.string()
    .pattern(/^[a-zA-Z\s'’ʼ-]{3,30}$/)
    .messages({
      "string.empty": "name cannot be an empty field",
    }),
  email: Joi.string().email().messages({
    "string.empty": "email cannot be an empty field",
  }),
  phone: Joi.string()
    .pattern(/^[0-9()+\s-]{10,19}$/)
    .messages({
      "string.empty": "phone cannot be an empty field",
    }),
  favorite: Joi.boolean(),
});

const favoriteJoiSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "string.empty": "favorite cannot be an empty field",
    "any.required": "missing field favorite",
  }),
});

module.exports = {
  ContactJoiSchema,
  updateJoiSchema,
  favoriteJoiSchema,
};
