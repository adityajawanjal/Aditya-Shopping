const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: [
      {
        name: {
          type: String,
        },
        Qty: {
          type: Number,
        },
        price: {
          type: Number,
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postalCode: {
        type: Number,
      },
      country: {
        type: String,
      },
    },
    payment:{
      type:String
    },
    paymentResult:{
      id:{
        type:String
      },
      status:{
        type:String
      },
      updateTime:{
        type:String
      },
      email:{
        type:String
      },
    },
    taxPrice:{
      type:Number
    },
    shippingPrice:{
      type:Number
    },
    totalPrice:{
      type:Number
    },
    isPaid:{
      type:Boolean
    },
    paidAt:{
      type:Date
    },
    isDelivered:{
      type:Boolean
    },
    deliveredAt:{
      type:Date
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
