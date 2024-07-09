console.log("Welcome NodeJs")
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()
const connectDB = require("./models/DB")
const Task = require("./models/TaskSchema");
const data = require('./models/AmazonData');


const PORT = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api1', require('./Router/MonthGet'))

app.use('/api2', require('./Router/SlaesAmountGet'))

app.use('/api2', require('./Router/SoldYesGet'))

app.use('/api2', require('./Router/SoldNoGet'))

app.use('/api3', require('./Router/MonthBarChart'))

app.use('/api3', require('./Router/MonthPieChart'))

const insertData = async () => {
    try {
      await connectDB();
      const category = await Task.findOne({category:'jewelery'})
        if(!category){
      await Task.insertMany(data);
      console.log("Data inserted");
        }else {
            console.log("Data already exists");
        }
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  insertData();

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})