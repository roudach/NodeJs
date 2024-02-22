const express =require ('express');
const router = express.Router();
router.get('/all',(req,res)=>{
    res.send([{id:1,name:"sachin"},{id:2,name:"ee"} ])
})

module.exports=router;