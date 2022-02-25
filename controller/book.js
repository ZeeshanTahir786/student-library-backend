const Book = require("../models/book");
const Student = require("../models/student");

exports.createBook = async (req, res) => {
  try {
    const newBook = {
      bookName: req.body.bookName,
      auther: req.body.auther,
      description: req.body.description,
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
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({
      status: "success",
      books: books.length,
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.borrowBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    // console.log(book);
    if (!book) {
      return res.status(404).json({
        status: "error",
        message: "Book not found",
      });
    }

    // const user = await Student.findById(req.student._id);
    // console.log("efef", req.student._id);
    // console.log("Fcu", user);
    book.borrowedBy = req.body.borrowedBy;
    book.DateOfBorrow = Date.now();
    book.DateOfReturn = req.body.DateOfReturn;
    await book.save();
    return res.status(200).json({
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
