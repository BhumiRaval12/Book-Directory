const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bookController = require("../controllers/bookController");

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/addBook", urlencodedParser, bookController.addBook);
router.get("/book", bookController.getAll);
router.get("/book/:id", bookController.getById);
router.post("/book/:id", urlencodedParser, bookController.updateById);

module.exports = router;
