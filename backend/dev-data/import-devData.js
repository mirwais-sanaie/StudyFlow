const fs = require("fs");

const dotenv = require("dotenv");
const Course = require("../models/courseModel");
const connectDB = require("./../configs/database");
dotenv.config({ path: "./config.env" });

//1) connect to db
connectDB();

//import all data from file to db
const path = require("path");

const courses = JSON.parse(
  fs.readFileSync(path.join(__dirname, "courses.json"), "utf-8")
);

const importData = async function () {
  try {
    await Course.create(courses);
    console.log("✅ Data successfully imported!");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};
//delete all data from db

const deleteData = async function () {
  try {
    await Course.deleteMany();
    console.log("🗑 All courses deleted from database!");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

/* 5) HANDLE COMMANDS */
if (process.argv.includes("--import")) {
  importData();
} else if (process.argv.includes("--delete")) {
  deleteData();
} else {
  console.log(`
⛔ No valid command.

Use one of these:

  node dev-data-import.js --import   👉 import JSON data
  node dev-data-import.js --delete   🗑 delete all data

`);
  process.exit(0);
}
