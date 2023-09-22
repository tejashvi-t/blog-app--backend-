const mongoose = require("mongoose");
require("dotenv").config();

const connectWithdb = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("database connected successfully "))
    .catch((error) => {
      console.log(error);
      console.log("DB connection failed");
      process.exit(1);
    });
};

module.exports = connectWithdb;
