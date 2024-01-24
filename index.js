
require("dotenv").config();
const express = require("express");
const authRoute = require("./routes/auth.route")

const web = express();

web.use(express.json());
web.use("/auth", authRoute);

web.listen(8000, () => {
  console.log("Server run on port 8000");
});
