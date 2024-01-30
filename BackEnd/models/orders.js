const Joi = require('joi');
const mongoose = require('mongoose');

// const subOrderSchema = new mongoose.Schema({
//     orderno:{type:String,required:true},
//     product:{type:productSchema}  });

const ordersSchema = new mongoose.Schema({
    orders:{type:Array}
});

const Orders = mongoose.model('orders',ordersSchema);

function validateOrders(order){
    const schema = {
        orders: Joi.array()
    };

    return Joi.validate(order,schema);
}

exports.ordersSchema = ordersSchema;
exports.Orders = Orders;
exports.validate = validateOrders;