
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//create express app
const app = express();

//Handle CORS and Middleware
app.use(function(req, res, next) {
    //Cors stuff:
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
    //
})

//Database
const MongoDB_URI = "mongodb://localhost:27017/"
mongoose.connect(MongoDB_URI).then(() => {
    console.log("Connected to Mongodb Database")
}).catch(err=> console.log(err))


app.use(bodyParser.json())

// routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

//const todosRoute = require('./routes/Todos')
//app.use('/todos', todosRoute)

//start server
app.listen(3000, ()=>{
    console.log("Server listening at Port 3000")
})