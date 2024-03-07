const express =require ('express');
const mongoose = require('mongoose');
const app = express();
const post= require('./models/post');

const router = express.Router();


router.get('/all',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"ee"} ])
})





// Connect to MongoDB
mongoose.connect('mongodb+srv://roudaynacherif9:roudayna.cherif@cluster0.gsxojr4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});




router.post('/post', async (req, res) => {
    const { title, content } = req.body; 

    try {
        
        const post = new Post({
            title,
            content
        });

        await post.save();

        res.status(201).json(post);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});




module.exports=router;