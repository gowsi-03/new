const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`MongoDB Connected: ${data.connection.host}`);
  });
};

module.exports = connectDB;
