const express = require("express");
const {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  aliasTopCourses,
  getCourseStats,
} = require("./../controllers/courseController");

const router = express.Router();

router.route("/top-5-cheap").get(aliasTopCourses, getAllCourses);

router.route("/").get(getAllCourses).post(createCourse);
router.route("/course-stats").get(getCourseStats);
router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

module.exports = router;
