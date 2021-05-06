const express = require("express");
const { CartItem } = require("../models/cart-model");
const { tryCatch } = require("../utils");

const router = express.Router();

router
.route("/")
.get((req, res) => {
  tryCatch(res, async () => {
    const cartItems = await CartItem.find.populate("_id");
    const norCartItems = cartItems.map((item) => {
      const{_id, ...doc} = item._id._doc;
      return{id: _id, ...doc, qty: item.qty};
    });
res.json(norCartItems);
  });
})
.post((req, res) => {
  tryCatch(res, async() => {
    const product = req.body;
    const {id, qty} = product;
    const CartItem = new CartItem({_id: id, qty});
    await CartItem.save();
    res.status(201).json(product);
  });
});

router
.route("/:id")
.post((req,res) => {
  tryCatch(res, async() => {
    const {qty} = req.body;
    const {id} = req.params;
    await CartItem.findByIdAndUpdate(id, {qty});
    res.status(201).json({qty});
  });
})
.delete((req, res) => {
  tryCatch(res, async() => {
    const{id} = req.params;
    await CartItem.findByIdAndDelete(id);
    res.status(204).json({});
  });
});

module.exports = router;