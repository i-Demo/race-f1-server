const express = require("express");
const router = express.Router();
const RaceResultController = require("../app/controllers/RaceResultController.js");

// @ [POST] api/races
// access Public
router.post("/", RaceResultController.create);

// @ [GET] api/races
// access Public
router.get("/", RaceResultController.getRaces);

// @ [GET] api/races/result
// access Public
router.get("/result", RaceResultController.getRaceResult);

module.exports = router;
