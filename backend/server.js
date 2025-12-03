const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const PORT = 5000;
console.log("Loaded URL:", process.env.DATABASE_URL);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
