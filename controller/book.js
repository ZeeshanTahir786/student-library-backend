const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const newBook = {
      bookName: req.body.bookName,
      auther: req.body.auther,
    };
    const book = await Book.create(newBook);
    return res.status(201).json({
      status: "success",
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
