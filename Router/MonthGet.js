const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema');


router.get('/allmonthdata', async(req, res)=>{
    try{
        const data = await task.find({});
        const sortData = data.sort((a,b)=> new Date(a.dateOfSale) - new Date(b.dateOfSale))
        res.status(200).json(sortData);
    } catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get("/septdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const septmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 8;
        })
        
        res.status(200).json(septmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/octdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const octmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 9;
        })
        
        res.status(200).json(octmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/novdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const novmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 10;
        })
        
        res.status(200).json(novmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/decdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const decmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 11;
        })
        
        res.status(200).json(decmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/jandata", async(req, res)=>{
    try{
        const data = await task.find({});
        const janmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 0;
        })
        
        res.status(200).json(janmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/febdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const febmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 1;
        })
        
        res.status(200).json(febmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/marchdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const marchmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 2;
        })
        
        res.status(200).json(marchmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/aprildata", async(req, res)=>{
    try{
        const data = await task.find({});
        const aprilmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 3;
        })
        
        res.status(200).json(aprilmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/maydata", async(req, res)=>{
    try{
        const data = await task.find({});
        const maymonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 4;
        })
        
        res.status(200).json(maymonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/junedata", async(req, res)=>{
    try{
        const data = await task.find({});
        const junemonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 5;
        })
        
        res.status(200).json(junemonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/julydata", async(req, res)=>{
    try{
        const data = await task.find({});
        const julymonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 6;
        })
        
        res.status(200).json(julymonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})

router.get("/augdata", async(req, res)=>{
    try{
        const data = await task.find({});
        const augmonth = data.filter((item)=> {
            const saleDate = new Date(item.dateOfSale);
            return saleDate.getMonth() === 7;
        })
        
        res.status(200).json(augmonth);
    } catch (err) {
      res.status(400).send(err.message);
      console.error(err);
    }
})





module.exports = router;