const express = require("express");
require("dotenv").config();
const authRouter = require("./routes/auth");
const notFound = require("./middlewares/not-found");

const port = 3000;
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);

app.use(notFound);

app.listen(port, () => console.log(`Server running on port ${port}`));
