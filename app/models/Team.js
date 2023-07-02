const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joi = require("joi");

const TeamSchema = new Schema(
    {
        year: { type: Number, required: true },
        team: { type: String, required: true },
        pts: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const validate = (team) => {
    const schema = joi.object({
        year: joi.number().required(),
        team: joi.string().required(),
        pts: joi.string().required(),
    });
    return schema.validate(team);
};

const Team = mongoose.model("teams", TeamSchema);

module.exports = { Team, validate };
