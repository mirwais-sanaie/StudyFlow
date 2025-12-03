const mongoose = require("mongoose");
const connectDB = async function () {
  const DB = process.env.DATABASE_URL.replace(
    "<PASSWORD>",
    process.env.DATABASE_PASSWORD
  );

  try {
    const conn = await mongoose.connectDB(DB);
    console.log("connection is connected " + conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
