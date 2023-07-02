const { Team, validate } = require("../models/Team");
const joi = require("joi");

class TeamController {
    // @ [POST] api/team
    // access Public
    async create(req, res, next) {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });
        try {
            let newTeam = new Team({ ...req.body });
            await newTeam.save();
            return res.status(201).json({ success: true, message: "Create Team Success", newTeam: newTeam });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [GET] api/team
    // Get Fastest Lap
    async getTeams(req, res, next) {
        try {
            const teams = await Team.find(req.query).sort({ pts: -1 });
            res.status(200).send({ success: true, teams: teams });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }
}

module.exports = new TeamController();
