const express = require('express');
const mongoose = require("mongoose");

const Task = require("../Models/task");
const router = express.Router();

//Create api
router.post("/", async (req, res) => {
    const {title, description, status} = req.body;

    const Task = require("../Models/task")

    try{
        const taskAdded = await Task.create({
            title, description, status
        });

        res.status(201).json(taskAdded)
    
    }

    catch (error){
        console.log(error);
        res.send(400).json({error: error.message})
    }
   
})

//Read api
router.get('/', async (req, res) => {

    const Task = require("../Models/task")
    
    try{
        const showAll = await Task.find()
        res.status(200).json(showAll)
    }

    catch (error){
        console.log(error);
        res.send(500).json({error: error.message})
    }
});

//Get single task
router.get('/:id', async (req, res) => {

    const { id } = req.params;
    
    try{
        const singleTask = await Task.findById({_id: id})
        res.status(200).json(singleTask)
    }

    catch (error){
        console.log(error);
        res.send(500).json({error: error.message})
    }
});

//Delete api
router.delete('/:id', async (req, res) => {

    const { id } = req.params;
    
    try{
        const singleTask = await Task.findByIdAndDelete({_id: id})
        res.status(200).json(singleTask)
    }

    catch (error){
        console.log(error);
        res.send(500).json({error: error.message})
    }
});

//Put and Patch
router.patch('/:id', async (req, res) => {

    const { id } = req.params;
    const {title, description, status} = req.body;
    
    try{
        const UpdateTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(UpdateTask)
    }

    catch (error){
        console.log(error);
        res.send(500).json({error: error.message})
    }
});

module.exports = router;