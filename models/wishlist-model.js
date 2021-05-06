const mongoose = require("mongoose");
const {Schema} = mongoose;
const wishlistItemSchema = new Schema({
  _id: {type: Schema.Types.ObjectId, ref: "Product"},
});
const WishlistItem = mongoose.model("wishlistItem", wishlistItemSchema);

module.exports = {WishlistItem};
