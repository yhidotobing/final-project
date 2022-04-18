const express = require("express");
const router = express.Router();

const createController = require("./create.classesController");
const readController = require("./read.classesController");
const readbyparamsController = require("./readbyparams.classesController");
const updateController = require("./update.classesController");
const deleteController = require("./delete.classesController");

router.post("/", createController.service);
router.get("/", readController.service);
router.get("/:id", readbyparamsController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
