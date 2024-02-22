const express =require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

router.get('/login',(req,res)=>{
    
    res.send([{id:1, name:"sachin"}, {id:2, name:"saurav"}])
})

router.post('/register', async (req, res)=>{
    try{
        const user = new User({username, password})= req.body;
            await user.save();
            res.status(201).send('User register successed');
            
    }catch(error){
        res.status(400).send(error.message)

    }
})

router.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/auth.html')})
module.exports=router;