const express = require("express");
const router = express.Router();
const FastestLapController = require("../app/controllers/FastestLapController.js");

// @ [POST] api/fastest-lap
// access Public
router.post("/", FastestLapController.create);

// @ [GET] api/auth
// access Public
router.get("/", FastestLapController.getData);

module.exports = router;
