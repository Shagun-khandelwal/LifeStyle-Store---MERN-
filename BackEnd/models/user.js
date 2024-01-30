const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const {serviceSchema} = require('./services');


const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minlength:3,
        maxlength:50,
        required:true
    },
    email:{
        type: String,
        required: true,
        minlength:5,
        maxlength:255,
        unique:true
    },
    password:{
        type: String,
        required:true,
        minlength:5,
        maxlength:255
    },
    services:{
        type:serviceSchema,
        required:true
    },
    phone:{
        type:String,
        required:true,
        minlength:10,
        maxlength:11
    },
    address:{
        type:String,
        required:true,
        minlength:5
    },
    city:{
        type:String,
        required:true,
        minlength:2
    },
    state:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true,
        min:100000,
        max:999999
    },
    cart:{
        type:Array
    },
    order:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

const User = mongoose.model("User", userSchema);

function validateUser(user){
    const schema = {
        fullname:Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
        services: Joi.objectId().required(),
        phone: Joi.string().min(10).max(11).required(),
        address: Joi.string().min(5).required(),
        city: Joi.string().min(2).required(),
        state: Joi.string().required(),
        pincode:Joi.number().min(100000).max(999999).required(),
        cart:Joi.array(),
        order:Joi.string(),
        isAdmin: Joi.boolean().default(false)
    };
    return Joi.validate(user,schema);
};

const generateAuthToken = (user)=> {
    const token = jwt.sign(
        {
            _id:user._id,
            fullname: user.fullname,
            email: user.email,
            services: user.services,
            phone:user.phone,
            address: user.address,
            city: user.city,
            state:user.state,
            pincode:user.pincode,
            cart:user.cart,
            order:user.order,
            isAdmin: user.isAdmin
        },
        config.get("jwtPrivateKey")
    );
    return token;
}

exports.generateAuthToken = generateAuthToken;
exports.User = User;
exports.validate = validateUser;