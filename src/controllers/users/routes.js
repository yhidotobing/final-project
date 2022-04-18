const express = require("express");
const router = express.Router();
const createController = require("./create.usersController");
const readController = require("./read.usersController");
const readbyparamsController = require("./readbyparams.usersController");
const updateController = require("./update.usersController");
const deleteController = require("./delete.usersController");
const registerUser = require("./register.usersController");
const loginUser = require("./login.usersController");

router.post("/register", registerUser.service);
router.post("/login", loginUser.service);
router.post("/", createController.service);
router.get("/", readController.service);
router.get("/:id", readbyparamsController.service);
router.put("/", updateController.service);
router.delete("/", deleteController.service);

module.exports = router;
