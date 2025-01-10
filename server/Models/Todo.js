const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

const Todomodel = mongoose.model("Todo", todoSchema);
module.exports = Todomodel;
