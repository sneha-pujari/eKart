const express = require('express');
const {WishlistItem} = require("../models/wishlist-model");
const {tryCatch} = require("../utils");

const router = express.Router();

router
.route("/")
.get((req, res) => {
  tryCatch(res, async() => {
    const wishlistItem = await WishlistItem.find().populate("_id");
    const norWishlistItems = WishlistItem.map((item) => {
      const {_id, ...doc} = item._id._doc;
      return {id: _id, ...doc}
    });
    res.json(norWishlistItems);
  });
})
.post((req, res) => {
    tryCatch(res, async () => {
      const product = req.body;
      const { id } = product;
      const wishlistItem = new WishlistItem({ _id: id });
      await wishlistItem.save();
      res.status(201).json(product);
    });
  });

router.delete("/:id", (req, res) => {
  tryCatch(res, async () => {
    const { id } = req.params;
    await WishlistItem.findByIdAndDelete(id);
    res.status(204).json({});
  });
});

module.exports = router;