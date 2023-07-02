const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@race-f1.9jxb8y3.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("MongoDb Connected...");
  } catch (error) {
    console.log("MongoDb Connected Fail...");
  }
}

module.exports = { connect };
