const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db"); // Database configuration

const app = express();
dotenv.config();

connectDB(); // Database Connection

app.use(express.json());

const errorMiddleware = require("./middleware/error");

//Route Imports
const product = require("./routes/productRouter");

app.use("/api/v1", product);

//Middleware for Errors
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Node Server Running in ${port}`));
