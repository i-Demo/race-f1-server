const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");

const FastestLapSchema = new Schema(
    {
        year: { type: Number, required: true },
        grandPrix: { type: String, required: true },
        driver: { type: String, required: true },
        car: { type: String, required: true },
        time: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const validate = (fastestlap) => {
    const schema = joi.object({
        year: joi.number().required(),
        grandPrix: joi.string().required(),
        driver: joi.string().required(),
        car: joi.string().required(),
        time: joi.string().required(),
    });
    return schema.validate(fastestlap);
};

const FastestLap = mongoose.model("fastestlaps", FastestLapSchema);

module.exports = { FastestLap, validate };
