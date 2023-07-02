const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");

const DriverSchema = new Schema(
    {
        year: { type: Number, required: true },
        name: { type: String, required: true },
        nationality: { type: String, required: true },
        car: { type: String, required: true },
        pts: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const validate = (driver) => {
    const schema = joi.object({
        year: joi.number().required(),
        name: joi.string().required(),
        nationality: joi.string().required(),
        car: joi.string().required(),
        pts: joi.number().required(),
    });
    return schema.validate(driver);
};

const Driver = mongoose.model("drivers", DriverSchema);

module.exports = { Driver, validate };
