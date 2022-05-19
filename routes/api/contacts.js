const express = require("express");

const { ctrlWrapper, validation } = require("../../middlewares");
const {
  joiSchema,
  updateJoiSchema,
  favoriteJoiSchema,
} = require("../../models");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete("/:contactId", ctrl.removeContact);

router.put(
  "/:contactId",
  validation(updateJoiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
