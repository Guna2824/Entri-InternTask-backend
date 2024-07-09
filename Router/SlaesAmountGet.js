const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema');

router.get('/allmonthamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const allmonthamount = data.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < allmonthamount.length; i++){
                 sum+=allmonthamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/septamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const septmonth = data.filter((item)=>{
            const sept = new Date(item.dateOfSale);
            return sept.getMonth() === 8;
        })
        const septamount = septmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < septamount.length; i++){
                 sum+=septamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/octamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const octmonth = data.filter((item)=>{
            const oct = new Date(item.dateOfSale);
            return oct.getMonth() === 9;
        })
        const octamount = octmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < octamount.length; i++){
                 sum+=octamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/novamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const novmonth = data.filter((item)=>{
            const nov = new Date(item.dateOfSale);
            return nov.getMonth() === 10;
        })
        const novamount = novmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < novamount.length; i++){
                 sum+=novamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/decamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const decmonth = data.filter((item)=>{
            const dec = new Date(item.dateOfSale);
            return dec.getMonth() === 11;
        })
        const decamount = decmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < decamount.length; i++){
                 sum+=decamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/janamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const janmonth = data.filter((item)=>{
            const jan = new Date(item.dateOfSale);
            return jan.getMonth() === 0;
        })
        const janamount = janmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < janamount.length; i++){
                 sum+=janamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/febamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const febmonth = data.filter((item)=>{
            const feb = new Date(item.dateOfSale);
            return feb.getMonth() === 1;
        })
        const febamount = febmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < febamount.length; i++){
                 sum+=febamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/marchamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const marchmonth = data.filter((item)=>{
            const march = new Date(item.dateOfSale);
            return march.getMonth() === 2;
        })
        const marchamount = marchmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < marchamount.length; i++){
                 sum+=marchamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/aprilamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const aprilmonth = data.filter((item)=>{
            const april = new Date(item.dateOfSale);
            return april.getMonth() === 3;
        })
        const aprilamount = aprilmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < aprilamount.length; i++){
                 sum+=aprilamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/mayamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const maymonth = data.filter((item)=>{
            const may = new Date(item.dateOfSale);
            return may.getMonth() === 4;
        })
        const mayamount = maymonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < mayamount.length; i++){
                 sum+=mayamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/juneamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const junemonth = data.filter((item)=>{
            const june = new Date(item.dateOfSale);
            return june.getMonth() === 5;
        })
        const juneamount = junemonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < juneamount.length; i++){
                 sum+=juneamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/julyamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const julymonth = data.filter((item)=>{
            const july = new Date(item.dateOfSale);
            return july.getMonth() === 6;
        })
        const julyamount = julymonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < julyamount.length; i++){
                 sum+=julyamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})

router.get('/augamount', async(req, res)=>{
    try{
        const data = await task.find({});
        const augmonth = data.filter((item)=>{
            const aug = new Date(item.dateOfSale);
            return aug.getMonth() === 7;
        })
        const augamount = augmonth.map((item)=>{
            return Math.floor(item.price);
            })
            let sum = 0;
            for(i = 0; i < augamount.length; i++){
                 sum+=augamount[i]
            }
        res.status(200).json(sum);
    }catch(err){
        res.status(400).send(err.message);
        console.log(err)
    }
})









module.exports = router