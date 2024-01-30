const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  const db = config.get("db");
  mongoose.connect(db)
    .then(() => console.log("CONNECTION TO MONGODB DATABASE SUCCESSFULL!!"))
    .catch(() =>
      console.error("AN ERROR OCCURRED WHILE CONNECTING WITH THE DATABASE!!")
    );
};
