const fs = require("fs");

const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/courses.json`)
);

exports.getAllCourses = (req, res) => {
  return res.status(200).json({
    success: true,
    data: courses,
  });
};

exports.getCourse = (req, res) => {
  const id = req.params.id;
  const course = courses.find((c) => c.id === id);

  console.log(id);
  if (id > courses.length) {
    return res.status(404).json({
      success: false,
      message: "Course not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: course,
  });
};
