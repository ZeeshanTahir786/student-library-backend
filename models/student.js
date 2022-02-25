const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  firstName: {
    type: "string",
    required: [true, "Please enter fname"],
  },
  lastName: {
    type: "string",
    required: [true, "Please enter lname"],
  },
  email: {
    type: "string",
    required: [true, "Please enter an email"],
    unique: [true, "Email already exists"],
  },
  booksBorrowed: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
});
module.exports = mongoose.model("Student", studentSchema);
