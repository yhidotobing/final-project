const express = require("express");
const router = express.Router();
const createController = require("./create.materialsController");
const readController = require("./read.materialsController");
const readbyparamsController = require("./readbyparams.materialsController");
const updateController = require("./update.materialsController");
const deleteController = require("./delete.materialsController");
const validator = require("../../helpers/validator");

router.post(
  "/",
  createController.validationSession_id,
  validator,
  createController.service
);
router.get("/", readController.service);
router.get("/:id", readbyparamsController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
