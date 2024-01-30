const Joi = require('joi');
const mongoose = require('mongoose');

const orderNumberSchema = new mongoose.Schema({
    ordernumber:{type:Number}
});


const orderNumber = mongoose.model('orderNumber',orderNumberSchema);


function validateOrderNumber(orderNumber){
    const schema = {
        ordernumber: Joi.number()
    };

    return Joi.validate(orderNumber,schema);
}

exports.orderNumberSchema = orderNumberSchema;
exports.OrderNumber = orderNumber;
exports.validate = validateOrderNumber;