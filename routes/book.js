const express = require("express");
const { createBook, getAllBooks, borrowBook } = require("../controller/book");
const router = express.Router();

router.route("/createBook").post(createBook);
router.route("/getAllBooks").get(getAllBooks);
router.route("/borrowBook/:id").post(borrowBook);

module.exports = router;
