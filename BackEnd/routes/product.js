const { Product, validate } = require("../models/products");
const { Genre } = require("../models/genre");
const express = require("express");
const validateObjectId = require("../middleware/validateObjectId");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find().select("-__v").sort("title");
  res.send(products);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid Genre.");

  const product = new Product({
    img: req.body.img,
    description: req.body.description,
    genre: {
      _id: genre._id,
      genre: genre.genre,
    },
    price: req.body.price,
    rating: req.body.rating,
    title: req.body.title,
  });
  await product.save();

  res.send(product);
});

router.put("/:id", validateObjectId, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = await Genre.findById(req.body.genreId);
  if (!genre) return res.status(400).send("Invalid Genre.");

  const product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      img: req.body.img,
      description: req.body.description,
      genre: {
        _id: genre._id,
        genre: genre.genre,
      },
      price: req.body.price,
      rating: req.body.rating,
      title: req.body.title,
    },
    {
      new: true,
    }
  );

  if (!product)
    return res.status(404).send("The product with the given Id was not found.");

  res.send(product);
});

router.delete("/:id",validateObjectId, async (req,res)=>{
    const product = await Product.findByIdAndRemove(req.params.id).select("-__v");

    if(!product)
        return res.status(404).send("The product with the given Id was not found.");
    
    res.send(product);
});

router.get("/:id",validateObjectId , async (req,res)=>{
    const product = await Product.findById(req.params.id);

    if(!product)
        return res.status(404).send("The product with the id was not found.");
    res.send(product);
})

module.exports = router;
