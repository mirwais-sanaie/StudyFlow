const mongoose = require("mongoose");

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A course must have a title"],
  },
  description: String,
  teacher: String,
  image: String,
  category: String,
  difficulty: String,
  duration: Number,
  lessons: Number,
  rating: Number,
  tags: [String],
  createdAt: String,
});

// Course Model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
