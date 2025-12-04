const fs = require("fs");

const dotenv = require("dotenv");
const Course = require("../models/courseModel");
dotenv.config({ path: "./config.env" });

//import all data from file to db
const courses = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/courses.json`, "utf-8")
);

const importData = async function () {
  try {
    await Course.create(courses);
  } catch (error) {
    console.log(error);
  }
};
//delete all data from db

const deleteDb = async function () {
  try {
    await Course.deleteMany();
  } catch (error) {
    console.log(error);
  }
};
