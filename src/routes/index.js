var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
const classRouter = require("../controllers/classes/routes");

/* GET home page. */
router.use("/users", userRouter);
router.use("/classes", classRouter);

module.exports = router;
