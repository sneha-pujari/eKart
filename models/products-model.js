const mongoose = require("mongoose");
const {Schema} = mongoose;
const productsData = require("./products-data");

const productSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  image: String,
  price: Number,
  inStock: Boolean,
  fastDelivery: Boolean,
  rating: Number,
  category: String,
});

const Product = mongoose.model("Product", productSchema);

async function productsCollection(){
  try{
productsData.forEach(async (product) => {
  const newProduct = new Product(product);
  const savedProduct = await newProduct.save();
  console.log(savedProduct);
});
  } catch(error){
    console.log(error);
  }
}

module.exports = {Product, productsCollection};