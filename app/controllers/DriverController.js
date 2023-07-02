const { Driver, validate } = require("../models/Driver");
const joi = require("joi");

class DriverController {
    // @ [POST] api/drivers
    // access Public
    async create(req, res, next) {
        const { error } = validate(req.body);
        if (error) return res.status(400).json({ success: false, message: error.details[0].message });
        try {
            let newDriver = new Driver({ ...req.body });
            await newDriver.save();
            return res.status(201).json({ success: true, message: "Create Driver Success", newDriver: newDriver });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }

    // [GET] api/drivers
    // Get Drivers
    async getDrivers(req, res, next) {
        try {
            const drivers = await Driver.find(req.query).sort({ pts: -1 });
            res.status(200).send({ success: true, drivers: drivers });
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Internal server error!" });
        }
    }
}

module.exports = new DriverController();
