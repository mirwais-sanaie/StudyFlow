const mongoose = require("mongoose");
const connectDB = async function () {
  const DB = process.env.DATABASE_URL.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  try {
    const conn = await mongoose.connect(DB);
    console.log("connection is connected " + conn.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
