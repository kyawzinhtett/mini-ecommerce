const path = require("path");
const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");
const notFound = require("./middlewares/not-found");

const port = 3000;
const app = express();

// Connect to MongoDB
connectDB();

// Set view engine to ejs
app.set("view engine", "ejs");

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/", shopRouter);

app.use(notFound);

app.listen(port, () => console.log(`Server running on port ${port}`));
