const express = require('express');
const router = express.Router();
const {OrderNumber} = require("../models/ordernumber");

router.post("/", async (req,res)=>{
    let orderNumber = new OrderNumber({ordernumber:1});
    orderNumber = await orderNumber.save();
    res.send(orderNumber);
});

module.exports = router;