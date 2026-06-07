const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.config");

const authRouter = require("./router/auth.routes");
const authorRouter = require("./router/author.routes");
const bookRouter = require("./router/book.routes");

const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use("/api/auth", authRouter);
app.use("/api/authors", authorRouter);
app.use("/api/books", bookRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});