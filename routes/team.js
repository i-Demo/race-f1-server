const express = require("express");
const router = express.Router();
const TeamController = require("../app/controllers/TeamController.js");

// @ [POST] api/team
// access Public
router.post("/", TeamController.create);

// @ [GET] api/team
// access Public
router.get("/", TeamController.getTeams);

module.exports = router;
