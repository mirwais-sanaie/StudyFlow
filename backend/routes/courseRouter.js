const express = require("express");
const {
  getAllCourses,
  getCourse,
} = require("./../controllers/courseController");

const router = express.Router();

router.use("/", getAllCourses);
router.use("/:id", getCourse);

module.exports = router;
