const { FastestLap, validate } = require("../models/FastestLap");
const joi = require("joi");

class FastestLapController {
    // @ [POST] api/fastest-lap
    // access Public
    async create(req, res, next) {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });
        try {
            let newFastestLap = new FastestLap({ ...req.body });
            await newFastestLap.save();
            return res.status(201).json({ success: true, message: "Create Lap Success", fastestLap: newFastestLap });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [GET] api/fastest-lap
    // Get Fastest Lap
    async getData(req, res, next) {
        try {
            const fastestLap = await FastestLap.find(req.query).sort({ createdAt: 1 });
            res.status(200).send({ success: true, fastestLap: fastestLap });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }
}

module.exports = new FastestLapController();
