const express = require('express');
const app = express();
const voitures = require("./routes/voitures");


app.use(express.json())
app.use('/voitures', voitures)

app.get('/', (req, res)=>{
    res.send(voitures)
})


app.listen(5000,()=>{
    console.log('listening on port 5000');
})


