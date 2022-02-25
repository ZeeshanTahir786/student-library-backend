const express = require("express");
const { registerStudent, getAllStudents } = require("../controller/student");
const router = express.Router();

router.route("/registerStudent").post(registerStudent);
router.route("/allStudents").get(getAllStudents);

module.exports = router;
