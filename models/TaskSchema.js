const mongoose = require("mongoose");

const taskSchema =new mongoose.Schema({
    id:{type: Number},
    title:{type: String},
    price:{type: Number},
    description:{type: String},
    category:{type: String},
    image:{type: String},
    sold:{type: Boolean},
    dateOfSale:{type: String},
})

module.exports = mongoose.model("task", taskSchema)