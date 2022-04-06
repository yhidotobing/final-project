const express = require("express");
const router = express.Router();

const createController = require("./create.classesController");
const readController = require("./read.classesController");
const updateController = require("./update.classesController");
const deleteController = require("./delete.classesController");

router.post("/", createController.service);
router.get("/", readController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
