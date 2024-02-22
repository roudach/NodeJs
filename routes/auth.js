const express =require ('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

router.get('/login',(req,res)=>{
    
    res.send([{id:1, name:"sachin"}, {id:2, name:"saurav"}])
})

router.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/auth.html')})
module.exports=router;