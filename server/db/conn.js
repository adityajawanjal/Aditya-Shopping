const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected...");
  } catch (err) {
    console.log(`The error in connectDB is : ${err}`);
  }
};
module.exports = connectDB;
