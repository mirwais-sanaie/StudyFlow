const Course = require("./../models/courseModel");

exports.aliasTopCourses = async (req, res, next) => {
  req.query.limit = "5";
  req.query.sort = "-ratingsAverage,price";
  req.query.fields = "title,price,ratingsAverage,summary,difficulty";
  next();
};

exports.getAllCourses = async (req, res) => {
  // 1) Filtering
  const queryObj = { ...req.query };
  const expludes = ["page", "limit", "sort", "fields"];
  expludes.forEach((el) => delete req.query[el]);
  console.log(queryObj);

  // 2) Advanced filtering (gte, gt, lte, lt)
  let queryStr = JSON.stringify(queryObj);
  queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  let query = Course.find(JSON.parse(queryStr));

  // 3) Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    console.log(sortBy);
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // 4) field limiting
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // 5) pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 10;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);

  const courses = await query;

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
    await Course.findByIdAndDelete(id);

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
