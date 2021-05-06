const mongoose = require("mongoose");
const {Schema} = mongoose;

const cartItemSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, 
  ref: "Product"},
  qty: Number
});

module.exports = mongoose.model("CartItem", cartItemSchema);