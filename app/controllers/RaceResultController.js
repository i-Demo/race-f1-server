const { RaceResult, validate } = require("../models/RaceResult");
const joi = require("joi");

class RaceResultController {
    // @ [POST] api/races
    // access Public
    async create(req, res, next) {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });
        try {
            let newRaceResult = new RaceResult({ ...req.body });
            await newRaceResult.save();
            return res
                .status(201)
                .json({ success: true, message: "Create Race Result Success", newRaceResult: newRaceResult });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [GET] api/races
    // Get races
    async getRaces(req, res, next) {
        try {
            // const raceResults = await RaceResult.aggregate([
            //     { $match: { year: 2023 } },
            //     { $group: { _id: "$grandPrix", races: { $addToSet: "$$CURRENT" } } },
            //     {
            //         $project: {
            //             genre: "$_id",
            //             _id: 0,
            //             playlists: 1,
            //         },
            //     },
            //     { $sort: { createdAt: -1 } },
            // ]);
            const races = await RaceResult.find(req.query).sort({ createdAt: 1 });
            res.status(200).send({ success: true, races: races });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [GET] api/races/result
    // Get races
    async getRaceResult(req, res, next) {
        try {
            const races = await RaceResult.find(req.query).sort({ pts: -1 });
            res.status(200).send({ success: true, races: races });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }
}

module.exports = new RaceResultController();
