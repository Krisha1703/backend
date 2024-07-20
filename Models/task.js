const mongoose = require("mongoose");

//create Schema
const taskSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
    },

    description : {
        type: String,
        required: true,
    },

    status : {
        type: String,
        required: true,
    }

});

//create Model
const Task = mongoose.model('Task', taskSchema)
module.exports = Task;