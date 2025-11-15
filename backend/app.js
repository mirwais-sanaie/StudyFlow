const express = require("express");
const app = express();
const courseRouter = require("./routes/courseRouter");

//Middleware
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome to StudyFlow API");
// });

app.use("/api/v1/courses", courseRouter);

module.exports = app;
