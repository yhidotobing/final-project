const express = require("express");
const router = express.Router();
const createController = require("./create.sessionsController");
const readController = require("./read.sessionsController");
const readbyparamsController = require("./readbyparams.sessionsController");
const updateController = require("./update.sessionsController");
const deleteController = require("./delete.sessionsController");
const validator = require("../../helpers/validator");

router.post(
  "/",
  createController.validationClass_id,
  validator,
  createController.service
);
router.get("/", readController.service);
router.get("/:id", readbyparamsController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
