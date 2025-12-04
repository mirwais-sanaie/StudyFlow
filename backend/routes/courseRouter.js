const express = require("express");
const {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} = require("./../controllers/courseController");

const router = express.Router();

// router.param("id", (req, res, next, val) => {
//   console.log(`Course id is : ${val}`);
//   next();
// });

router.route("/").get(getAllCourses).post(createCourse);
router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

module.exports = router;
