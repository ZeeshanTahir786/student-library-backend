const Student = require("../models/student");

exports.registerStudent = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const newStudent = await Student.findOne({ email });
    if (newStudent) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }
    const student = await Student.create({
      email,
      firstName,
      lastName,
    });

    return res.status(201).json({
      message: "Student registered successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
exports.getAllStudents = async (req, res) => {
  try {
    const student = await Student.find();
    if (!student) {
      return res.status(400).json({
        message: "No student found",
      });
    }

    return res.status(201).json({
      message: "Students retrieved successfully",
      student,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
