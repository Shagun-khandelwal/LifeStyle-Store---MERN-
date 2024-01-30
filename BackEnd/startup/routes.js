const express = require("express")
const products = require("../routes/product")
const genres = require("../routes/genre");
const users = require("../routes/user");
const services = require("../routes/services");
const auth = require("../routes/auth");
const orders = require("../routes/order");
const orderNumber = require("../routes/ordernumber");
module.exports = function (app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/products',products);
  app.use('/genres',genres);
  app.use('/users',users);
  app.use('/services',services);
  app.use('/login',auth);
  app.use('/orders',orders);
  app.use('/ordernumber',orderNumber);
};
