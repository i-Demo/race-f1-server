const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");

const RaceResultSchema = new Schema(
    {
        year: { type: Number, required: true },
        grandPrix: { type: String, required: true },
        date: { type: String, required: true },
        pos: { type: String, required: true },
        no: { type: Number, required: true },
        driver: { type: String, required: true },
        car: { type: String, required: true },
        laps: { type: Number, required: true },
        time: { type: String, required: true },
        pts: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const validate = (race) => {
    const schema = joi.object({
        year: joi.number().required(),
        grandPrix: joi.string().required(),
        date: joi.string().required(),
        pos: joi.string().required(),
        no: joi.number().required(),
        driver: joi.string().required(),
        car: joi.string().required(),
        laps: joi.number().required(),
        time: joi.string().required(),
        pts: joi.number().required(),
    });
    return schema.validate(race);
};

const RaceResult = mongoose.model("raceresults", RaceResultSchema);

module.exports = { RaceResult, validate };
