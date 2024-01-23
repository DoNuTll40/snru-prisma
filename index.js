
require("dotenv").config();
const express = require("express");

const web = express();

web.use(express.json());

web.listen(8000, () => {
  console.log("Server run on port 8000");
});
