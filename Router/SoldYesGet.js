const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema');

router.get('/allmonthsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const allmonthsoldtrue = data.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(allmonthsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/septsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const septmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 8;
        })
        const septsoldtrue = septmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(septsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/octsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const octmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 9;
        })
        const octsoldtrue = octmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(octsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/novsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const novmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 10;
        })
        const novsoldtrue = novmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(novsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/decsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const decmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 11;
        })
        const decsoldtrue = decmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(decsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/jansoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const janmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 0;
        })
        const jansoldtrue = janmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(jansoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/febsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const febmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 1;
        })
        const febsoldtrue = febmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(febsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/marchsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const marchmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 2;
        })
        const marchsoldtrue = marchmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(marchsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/aprilsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const aprilmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 3;
        })
        const aprilsoldtrue = aprilmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(aprilsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/maysoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const maymonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 4;
        })
        const maysoldtrue = maymonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(maysoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/junesoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const junemonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 5;
        })
        const junesoldtrue = junemonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(junesoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/julysoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const julymonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 6;
        })
        const julysoldtrue = julymonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(julysoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/augsoldyes', async(req, res)=>{
    try{
        const data = await task.find({});
        const augmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 7;
        })
        const augsoldtrue = augmonth.filter((item)=>{
            return item.sold === true;
        })
        res.status(200).json(augsoldtrue.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})


module.exports = router