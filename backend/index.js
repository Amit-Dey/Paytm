
const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./routes");
const bodyParser = require("body-parser"); 
require("dotenv").config();

const User = require("./db/db");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", mainRouter);


app.listen(process.env.PORT || 3001, () => {
    console.log("Server is running on port 3000");
});

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});