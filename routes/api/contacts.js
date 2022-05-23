const express = require("express");

const { auth, ctrlWrapper, validation } = require("../../middlewares");
const {
  ContactJoiSchema,
  updateJoiSchema,
  favoriteJoiSchema,
} = require("../../schemas");

const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validation(ContactJoiSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  auth,
  validation(updateJoiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  auth,
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
