const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  bookName: String,
  auther: {
    type: String,
    required: true,
  },
  description: String,
  borrowedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
  DateOfBorrow: Date,
  DateOfReturn: Date,
});

module.exports = mongoose.model("Book", bookSchema);
