const express = require("express");
const bookController = require("./controllers/bookController");
const book = require("./models/books");
const router = require("./route/route");

const app = express();

app.use("/", router);

app.listen(3000);
console.log("you are listening to port 3000....");
