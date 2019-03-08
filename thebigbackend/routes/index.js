var express = require("express");
var router = express.Router();
var defaultController = require("../controllers/default.controller");

router.get("/", defaultController.root);

module.exports = router;
