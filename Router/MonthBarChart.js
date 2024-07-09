const express = require('express');
const router = express.Router();
const task = require('../models/TaskSchema')

router.get('/allmonthchart', async(req, res)=>{
    try{
        const data = await task.find({});

            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    data.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/septchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 8;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/octchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 9;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/novchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 10;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/decchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 11;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/janchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 0;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/febchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 1;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/marchchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 2;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/aprilchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 3;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/maychart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 4;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/junechart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 5;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/julychart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 6;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})

router.get('/augchart', async(req, res)=>{
    try{
        const data = await task.find({});
        const month = data.filter((item)=>{
            return new Date(item.dateOfSale).getMonth() === 7;
        })
            var array = [];
            var arr1 = [];
            var arr2 = [];
            var arr3 = [];
            var arr4 = [];
            var arr5 = [];
            var arr6 = [];
            var arr7 = [];
            var arr8 = [];
            var arr9 = [];
            var arr10 = [];
            var arr11 = [];

    month.map((item)=>{
        if(item.price > 0 && item.price < 101){
            arr1.push(item.price)
        }else if(item.price > 100 && item.price < 201){
            arr2.push(item.price)
        }else if(item.price > 200 && item.price < 301){
            arr3.push(item.price) 
        }else if(item.price > 300 && item.price < 401){
            arr4.push(item.price)
        }else if(item.price > 400 && item.price < 501){
            arr5.push(item.price)
        }else if(item.price > 500 && item.price < 601){
            arr6.push(item.price)
        }else if(item.price > 600 && item.price < 701){
            arr7.push(item.price) 
        }else if(item.price > 700 && item.price < 801){
            arr8.push(item.price)
        }else if(item.price > 800 && item.price < 901){
            arr9.push(item.price)
        }else if(item.price > 900 && item.price < 1001){
            arr10.push(item.price)
        }else if(item.price > 1000){
            arr11.push(item.price)
            }
        })
    array.push(arr1.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length,arr10.length,arr11.length)
  
        res.status(200).json(array)
    }catch(err){
        res.status(400).send(err.message)
        console.log(err)
    }
})
















module.exports = router;