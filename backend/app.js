const express = require("express");
const app = express();
const courseRouter = require("./routes/courseRouter");
const morgan = require("morgan");
const connectDB = require("./configs/database");

app.use(express.json());
app.use(morgan("dev"));

connectDB();

//Middleware

// app.get("/", (req, res) => {
//   res.send("Welcome to StudyFlow API");
// });

app.use("/api/v1/courses", courseRouter);

module.exports = app;
