const express = require("express");
const router = express.Router();
const createController = require("./create.usersController");
const readController = require("./read.usersController");
const updateController = require("./update.usersController");
const deleteController = require("./delete.usersController");

router.post("/", createController.service);
router.get("/", readController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
