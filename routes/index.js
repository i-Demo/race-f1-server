const fastestLapRouter = require("./fastestlap.js");
const teamRouter = require("./team.js");
const driverRouter = require("./driver.js");
const raceResultRouter = require("./race.js");
// const typeRouter = require("./type.js");

function route(app) {
    app.use("/api/fastest-lap", fastestLapRouter);
    app.use("/api/team", teamRouter);
    app.use("/api/driver", driverRouter);
    app.use("/api/races", raceResultRouter);
    app.get("/api", (req, res, next) => {
        res.status(200).json("Server Live");
    });
}

module.exports = route;
