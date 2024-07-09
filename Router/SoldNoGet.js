const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema');

router.get('/allmonthsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const septsoldfalse = data.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(septsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})


router.get('/septsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const septmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 8;
        })
        const septsoldfalse = septmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(septsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/octsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const octmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 9;
        })
        const octsoldfalse = octmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(octsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/novsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const novmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 10;
        })
        const novsoldfalse = novmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(novsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/decsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const decmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 11;
        })
        const decsoldfalse = decmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(decsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/jansoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const janmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 0;
        })
        const jansoldfalse = janmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(jansoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/febsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const febmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 1;
        })
        const febsoldfalse = febmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(febsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/marchsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const marchmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 2;
        })
        const marchsoldfalse = marchmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(marchsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/aprilsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const aprilmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 3;
        })
        const aprilsoldfalse = aprilmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(aprilsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/maysoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const maymonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 4;
        })
        const maysoldfalse = maymonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(maysoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/junesoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const junemonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 5;
        })
        const junesoldfalse = junemonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(junesoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/julysoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const julymonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 6;
        })
        const julysoldfalse = julymonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(julysoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/augsoldno', async(req, res)=>{
    try{
        const data = await task.find({});
        const augmonth = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 7;
        })
        const augsoldfalse = augmonth.filter((item)=>{
            return item.sold === false;
        })
        res.status(200).json(augsoldfalse.length)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})


module.exports = router