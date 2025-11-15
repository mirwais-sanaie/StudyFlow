const fs = require("fs");

const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/courses.json`, "utf8")
);

exports.getAllCourses = (req, res) => {
  res.status(200).json({
    success: true,
    data: courses,
  });
};

exports.getCourse = (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((c) => c.id === id);
  console.log(course);

  if (id > courses.length || id < 1) {
    res.status(404).json({
      success: false,
      message: "Course not found",
    });
  }

  res.status(200).json({
    success: true,
    data: course,
  });
};
