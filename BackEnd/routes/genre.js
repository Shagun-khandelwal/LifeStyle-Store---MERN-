const validateObjectId = require("../middleware/validateObjectId");
const {Genre,validate} = require("../models/genre");
const express = require('express');
const router = express.Router();

router.get("/", async (req,res)=>{
    const genres = await Genre.find();
    res.send(genres);
});

router.post("/", async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let genre  = new Genre({genre:req.body.genre});
    genre = await genre.save();

    res.send(genre);
});

router.put("/:id",validateObjectId,async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(
        req.params.id,
        {genre:req.body.genre},
        {
            new:true
        }
    );

    if(!genre)
        return res.status(404).send("The genre with the given Id was not found..");
    res.send(genre);
});

router.delete("/:id",validateObjectId,async (req,res)=>{
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if(!genre)
        return res.status(404).send("The genre with the given Id was not found..");
    res.send(genre);
});

router.get("/:id",validateObjectId, async (req,res)=>{
    const genre = await Genre.findById(req.params.id).select("-__v");

    if(!genre) 
        return res.status(404).send("The genre with the given Id was not found..");
    res.send(genre);
})


module.exports = router;