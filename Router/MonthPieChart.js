const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema')

router.get('/allmonthpiechart', async(req, res)=>{
    try{
        const data = await task.find({});

        const categoryCount = {};
        data.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/septpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 8;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/octpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 9;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/novpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 10;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/decpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 11;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/janpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 0;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/febpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 1;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/marchpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 2;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/aprilpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 3;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/maypiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 4;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/junepiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 5;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/julypiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 6;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/augpiechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 7;
        })
        const categoryCount = {};
        month.forEach(item => {
            if (categoryCount[item.category]) {
                categoryCount[item.category]++;
            } else {
                categoryCount[item.category] = 1;
            }
        });
        const result = Object.keys(categoryCount).map(category => {
        return { label: category, value: categoryCount[category] };
        });
        res.status(200).json(result)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})



module.exports = router;