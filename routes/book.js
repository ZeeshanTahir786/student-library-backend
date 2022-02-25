const express = require("express");
const { createBook } = require("../controller/book");
const router = express.Router();

router.route("/createBook").post(createBook);

module.exports = router;
