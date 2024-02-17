const express = require('express');
const router = express.Router();



let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];
router.get('/all', (req, res) => {

    res.send(voitures)
});

router.get('/:id', (req, res)=>{
    const voituresId= parseInt(req.params.id);
    const voitures = voitures.find(item => item.id === voituresId)
    if(voitures){
        res.send(voitures)
    }else{
        res.status(404).send("voitures non trouvé")
    }
})

router.post('/create', (req, res) => {
    const nouvelleVoiture = req.body;
    voiture.push(nouvelleVoiture);
    
    res.status(201).send({message:"car created", data:nouvelleVoiture})

    
});


module.exports = router;