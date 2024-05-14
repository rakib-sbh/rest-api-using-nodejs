const express = require("express");
const cors = require("cors");
require("dotenv").config();

const rootRouter = require("../routes/root.route");
const usersRouter = require("../routes/users.route");

const app = express();

//* Global Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//* users route
app.use("/users", usersRouter);

//* home router
app.use(rootRouter);

module.exports = app;
