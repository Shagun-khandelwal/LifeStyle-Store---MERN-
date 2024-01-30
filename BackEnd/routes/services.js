const {Service,validate} = require("../models/services");
const express = require('express');
const router = express.Router();

router.get("/", async (req,res)=>{
    const services = await Service.find();
    res.send(services);
});

router.post("/", async (req,res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let service = new Service({service:req.body.service});
    service = await service.save();

    res.send(service);
})

module.exports = router;