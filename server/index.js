const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const Todomodel = require('./Models/Todo')


const app = express()

//middleware
app.use (cors())
app.use(express.json())

//Databse connection
mongoose.connect('mongodb://127.0.0.1:27017/todo')


// To show data in the Webpage
app.get('/get', (req, res) => {
    Todomodel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// To post data in the database
app.post('/add', (req, res) => {
    const task = req.body.task
    console.log(task)
    Todomodel.create({task: task})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})  


app.listen(3001, ()=>{
    console.log("server is running")
})