const express = require("express");

const { auth, ctrlWrapper, validation, upload } = require("../../middlewares");
const { userJoiSchema, verifySchema } = require("../../schemas");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(userJoiSchema), ctrlWrapper(ctrl.singup));

router.post("/login", validation(userJoiSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify/", validation(verifySchema), ctrlWrapper(ctrl.sendEmail));

module.exports = router;
