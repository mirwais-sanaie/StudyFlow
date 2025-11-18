const express = require("express");
const {
  getAllCourses,
  getCourse,
} = require("./../controllers/courseController");

const router = express.Router();

router.param("id", (req, res, next, val) => {
  console.log(`Course id is : ${val}`);
  next();
});

router.route("/").get(getAllCourses);
router.route("/:id").get(getCourse);

module.exports = router;
