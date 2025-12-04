const express = require("express");
const morgan = require("morgan");
const connectDB = require("./configs/database");
const courseRouter = require("./routes/courseRouter");

const app = express();
app.use(express.json());
connectDB();

// Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

// app.get("/", (req, res) => {
//   res.send("Welcome to StudyFlow API");
// });

app.use("/api/v1/courses", courseRouter);

module.exports = app;
