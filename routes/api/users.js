const express = require("express");

const { auth, ctrlWrapper, validation } = require("../../middlewares");
const { userJoiSchema } = require("../../schemas");
const { users: ctrl } = require("../../controllers");

const router = express.Router();

router.post("/signup", validation(userJoiSchema), ctrlWrapper(ctrl.singup));

router.post("/login", validation(userJoiSchema), ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch("/", auth, ctrlWrapper(ctrl.updateSubscription));

module.exports = router;
