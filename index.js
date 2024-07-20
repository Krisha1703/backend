const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

const taskRouter = require("./routes/taskRoute")

app.use(express.json());
mongoose
    .connect(process.env.URI)
    .then(() => {
        console.log("Connected to database successfully!");
        app.listen(process.env.PORT || 8000, (err) => {
            if (err) console.log(err);
            console.log('Server is running at', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log("error", error);
    });

    app.use("/api/task",taskRouter);

