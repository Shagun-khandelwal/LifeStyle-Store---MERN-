const bcrypt = require("bcrypt");
const _ = require("lodash");
const {Service} = require("../models/services");
const {User, validate, generateAuthToken} = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/", async (req,res)=>{
    const user = await User.find();
    res.send(user);
});

router.get("/:id", async (req,res)=>{
    let user = await User.findById(req.params.id).select("-password -cart -order");
    if(!user)
        return res.status(400).send("The user with the given id was not found..")
    res.send(user);
})

router.post("/",async (req,res)=>{
  const {error} = validate(req.body);
  console.log(error);
  if(error) return res.status(400).send(error.details[0].message);
  
  let user = await User.findOne({email: req.body.email});
  if(user) return res.status(400).send("User already registered.");

  const service = await Service.findById(req.body.services);
  if (!service) return res.status(400).send("Invalid Service.");

    user = new User({
        fullname:req.body.fullname,
        email:req.body.email,
        password:req.body.password,
        services:{
            _id:service._id,
            service:service.service
        },
        phone:req.body.phone,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        pincode:req.body.pincode,
        cart:[],
        order:req.body.order
    });

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(user.password,salt);
  await user.save();

  res.send(user);
});

router.put("/cartadd/:id", async (req,res) =>{
    let user = await User.findById(req.params.id);
    let productpresent = false;
    for(let i=0;i<user.cart.length;i++){
        if(user.cart[i]===req.body['1']){
            productpresent = true;
            break;
        }
    }
    if(productpresent){
        const token = generateAuthToken(user);
        res.send(token);
    }
    else{
        let incart = req.body['0'].cart;
        incart.push(req.body['1']);
        user = await User.findByIdAndUpdate(req.params.id,{
            fullname:req.body[0].fullname,
            email:req.body[0].email,
            password:req.body[0].password,
            services:req.body[0].services,
            phone:req.body[0].phone,
            address:req.body[0].address,
            city:req.body[0].city,
            state:req.body[0].state,
            pincode:req.body[0].pincode,
            cart:incart,
            order:req.body[0].order
        },{new:true});
    
        if (!user)
          return res.status(404).send("The user with the given Id was not found.");
        const token = generateAuthToken(user);
    
        res.send(token);
    }
});
router.put("/cartdelete/:id",async (req,res)=>{
    let user = await User.findById(req.params.id);
    const updatedcart = user.cart.filter(productid => productid!==req.body.pid);
    user = await User.findByIdAndUpdate(req.params.id,{
        fullname:user.fullname,
        email:user.email,
        password:user.password,
        services:user.services,
        phone:user.phone,
        address:user.address,
        city:user.city,
        state:user.state,
        pincode:user.pincode,
        cart:updatedcart,
        order:user.order
    },{new:true});
    
    const token = generateAuthToken(user);
    res.send(token);
})

// router.put("/:id", validateObjectId, async (req, res) => {
//     const { error } = validate(req.body);
//     if (error) return res.status(400).send(error.details[0].message);
  
//     const genre = await Genre.findById(req.body.genreId);
//     if (!genre) return res.status(400).send("Invalid Genre.");
  
//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       {
//         img: req.body.img,
//         description: req.body.description,
//         genre: {
//           _id: genre._id,
//           genre: genre.genre,
//         },
//         price: req.body.price,
//         rating: req.body.rating,
//         title: req.body.title,
//       },
//       {
//         new: true,
//       }
//     );
  
//     if (!product)
//       return res.status(404).send("The product with the given Id was not found.");
  
//     res.send(product);
//   });

module.exports = router;
