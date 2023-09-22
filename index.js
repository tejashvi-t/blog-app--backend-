const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;
// middleware
app.use(express.json());
// importing routes
const blog = require("./routes/blog");

// mounting route
app.use("/api/v1", blog);

// connecting with dabase
const connectWithdb = require("./config/databse");
connectWithdb();

app.listen(PORT, () => {
  console.log(`EXPRESS SERVER STARTED ON PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>
This is homepage</h1>`);
});
