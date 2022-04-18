var express = require("express");
var router = express.Router();
const userRouter = require("../controllers/users/routes");
const classRouter = require("../controllers/classes/routes");
const sessionRouter = require("../controllers/sessions/routes");
const materialRouter = require("../controllers/materials/routes");

/* GET home page. */
router.use("/users", userRouter);
router.use("/classes", classRouter);
router.use("/sessions", sessionRouter);
router.use("/materials", materialRouter);
module.exports = router;
