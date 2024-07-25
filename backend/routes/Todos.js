const express = require("express");
const router = express.Router();
const Todo = require('../models/Todos')

//Get All Todo route
router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos)
});

//Create new Todo
router.post("/new", async (res, req) => {
    const newTodo = new Todo(
        // req.body //What the Vue App is sending
        {
            todo:"Go to Canada",
            author: "Flanders",
        }
    );
    const savedTodo = await newTodo.save()
    res.json(savedTodo)
});

//Getter by ID
router.get("/get/:id", async (res, req) => {
    const todoById = await Todo.findById({ _id: req.params.id })
    res.json(todoById)
});


//Detele a Todo by Id
router.delete("/delete/:id", async (res, req) => {
    const DeleteTodoById = await Todo.findByIdAndDelete({ _id: req.params.id })
    res.json(DeleteTodoById)
});

//Update a Todo by Id
router.put("/update/:id", async (res, req) => {
    const UpdateTodoById = await Todo.updateOne(
        // {_id : req.params.id}, { $set: req.body }
        {
            todo: "Skating",
            author: "Bart"
        }
    )
    res.json(UpdateTodoById)
});

module.exports = router;