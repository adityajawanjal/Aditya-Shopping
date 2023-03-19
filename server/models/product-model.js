const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  rating:{
    type:Number,
    required:true
  },
  comment:{
    type:String,
    required:true
  }
},{timestamps:true});

const productSchema = new mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    description: {
      type: String,
    },
    reviews:[reviewSchema],
    rating:{
      type:Number,
    },
    numReviews:{
      type:Number,
    },
    price:{
      type:Number,
    },
    countInStock:{
      type:Number,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
