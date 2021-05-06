const express = require("express");
const dotenv = require("dotenv");

require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const {dbConnect} = require("./db/db");
const {productsCollection} = require("./models/products-model");

const productsRouter = require("./router/products-router");
const cartRouter = require("./router/cart-router");
const wishlistRouter = require("./router/wishlist-router");
const app = express();
const port = 4000;
app.use(cors());
app.use(bodyParser.json());

dbConnect();
app.get("/", (req, res) => {
  res.send("API for eCommerce app");
})

app.use("/products", productsRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

app.use((err, req, res, next) => {
  if(res.headersSent) {
    return(next(err));
  }
  res.status(500).json({error: err.message});
});

app.listen(port, () => {
  console.log(`App started on port ${port}.`)
})
