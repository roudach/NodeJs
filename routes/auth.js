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
        const {username,password}=req.body;
        const user = new User({username,password});
            await user.save();
            res.status(201).send('User register successed');
            
    }catch(error){
        res.status(400).send(error.message)

    }
})

router.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/auth.html')})

router.post('/login', async (req, res)=>{
    try{
        const {username,password}=req.body;
        const user = new User.findOne({username: username});
        if(!user){
            return res.status(404).send('user not found')
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password);
        if(!isPasswordMatch){
            return res.status(401).send('invalid password')
        }
        const token = jwt.sign({_id:user._id}, process.env.JWT_SECRET);
        res.send({token: token})
    }catch(error){
        res.status(400).send(err.message)
    }
});

module.exports=router;