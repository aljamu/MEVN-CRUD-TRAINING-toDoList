const express = require("express");
const router = express.Router();
const Todo = require('../models/')

const mongoose = require('mongoose');
const TodosSchema = new mongoose.Schema({
    todo: String,
    author: String,
})

module.exports = mongoose.model('todo', TodosSchema)