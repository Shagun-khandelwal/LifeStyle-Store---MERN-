const validateObjectId = require("../middleware/validateObjectId");
const { Orders, validate } = require("../models/orders");
const { OrderNumber } = require("../models/ordernumber");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Orders.find();
  res.send(orders);
});

router.get("/:id", async (req, res) => {
  const orders = await Orders.findById(req.params.id).select("-_id -__v");
  if (!orders)
    return res.status(400).send("The user with the given id was not found..");
  res.send(orders);
});

router.post("/", async (req, res) => {
  let orders = new Orders({ orders: [] });
  orders = await orders.save();

  res.send(orders._id);
});

router.put("/:id", async (req, res) => {
  let ordernumber = await OrderNumber.findById("6441074923b75c1eb18c4a4e");
  let orders = await Orders.findById(req.params.id);

  let orderobj = {
    orderno: ordernumber.ordernumber,
    productid: req.body.productid,
  };

  let ordersarr = orders.orders;
  ordersarr.push(orderobj);

  orders = await Orders.findByIdAndUpdate(
    req.params.id,
    {
      orders: ordersarr,
    },
    { new: true }
  );

  ordernumber.ordernumber += 1;

  ordernumber = await OrderNumber.findByIdAndUpdate(
    "6441074923b75c1eb18c4a4e",
    {
      ordernumber: ordernumber.ordernumber,
    },
    { new: true }
  );

  res.send(orders);
});

router.put("/deleteorder/:id", async (req, res) => {
  let orders = await Orders.findById(req.params.id);
  let ordersarr = orders.orders.filter(
    (order) =>
      order.productid !== req.body.productid &&
      order.orderno !== req.body.orderno
  );
  orders = await Orders.findByIdAndUpdate(
    req.params.id,
    {
      orders: ordersarr,
    },
    { new: true }
  );

  res.send(orders);
});

module.exports = router;
