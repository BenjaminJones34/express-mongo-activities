require("dotenv").config();

const express = require("express");
const { connection } = require("./connection");
const coffeeRouter = require("./routes/coffee");
const teaRouter = require("./routes/tea");

const app = express();

app.use(express.json());

app.use("/coffee", coffeeRouter);
app.use("/tea", teaRouter);

app.listen(process.env.HTTP_PORT || 80, () => {
    connection.once("open", () => {
        console.log("MongoDB Online");
    });
});