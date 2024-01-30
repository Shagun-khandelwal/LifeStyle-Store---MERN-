const Joi = require('joi');
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    service:{
        type:String,
        required:true
    }
});

const Service = mongoose.model('Service',serviceSchema);

function validateService(service){
    const schema = {
        service: Joi.string().required()
    };

    return Joi.validate(service,schema);
}

exports.serviceSchema = serviceSchema;
exports.Service = Service;
exports.validate = validateService;