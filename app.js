const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const category = require("./routes/category");
const auth =require('./routes/auth')

dotenv.config()
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000

//create instance of server
const app = express();
app.use(express.json())

app.use('/category', category)
app.get('/products', (req, res)=>{
    res.send([{id:1, name:"sachin"}, {id:2, name:"saurav"}])
})

app.get('/template', (req, res)=>{
    res.redirect('/products')
})
//use the middleware body parser in express
app.use('/category', category)
app.post('/create', (req, res)=>{
    console.log(req.body)
})

app.get('/', (req, res)=>{
    //res.send("Hello World")
    //res.send({id:1, name:"sachin"})
    //res.json({id:2, name:"sachin"})
    res.sendFile(__dirname + '/index.html')
})


app.use('/auth', auth)
app.get('/auth', (req, res)=>{
    res.sendFile(__dirname + '/auth.html')
})



mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Connected to the database')
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}).catch(err=>{
    console.log('Error connecting to database:',err.message)
})


