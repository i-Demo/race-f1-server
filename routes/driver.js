const express = require("express");
const router = express.Router();
const DriverController = require("../app/controllers/DriverController.js");

// @ [POST] api/driver
// access Public
router.post("/", DriverController.create);

// @ [GET] api/driver
// access Public
router.get("/", DriverController.getDrivers);

module.exports = router;
