const Course = require("./../models/courseModel");

exports.getAllCourses = async (req, res) => {
  const courses = await Course.find();

  res.status(200).json({
    status: "success",
    results: courses.length,
    data: {
      courses,
    },
  });
};

exports.createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        course: newCourse,
      },
    });
  } catch (error) {
    console.log(error);
    console.log("can not post");
  }
};

exports.getCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({
        status: "fail",
        message: "Course not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "error",
      message: "Invalid ID",
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Invalid ID",
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const id = req.params.id;
    const course = await Course.findByIdAndDelete(id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Invalid ID",
    });
  }
};
