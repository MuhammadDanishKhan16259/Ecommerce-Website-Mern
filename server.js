//es5
// const express = require("express");
// const colors = require("colors");
//es6
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

//configure env
dotenv.config();
//rest object
//config database
connectDb();

const app = express();

//middlwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
//rest api
app.get("/", (req, res) => {
  res.send(`<h1>Welcome to ecommerce app!</h1>`);
});
//PORT
const PORT = process.env.PORT || 8080;
//run listen
app.listen(PORT, () => {
  console.log(
    `Server listening on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});