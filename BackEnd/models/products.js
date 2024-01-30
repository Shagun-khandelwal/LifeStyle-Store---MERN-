const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require('./genre');

const Product = mongoose.model('Product',new mongoose.Schema({
  img:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true
  },
  genre:{
    type:genreSchema,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  title:{
    type:String,
    required:true
  }
}));

function validateProduct(product){
    const schema = {
        img: Joi.string().trim().required(),
        description: Joi.string().required(),
        genreId: Joi.objectId().required(),
        price: Joi.number().required(),
        rating: Joi.number().required(),
        title: Joi.string().required()
    };
    return Joi.validate(product,schema);
};

exports.Product = Product;
exports.validate = validateProduct;