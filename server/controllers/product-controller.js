const Product = require("../models/product-model");

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(`The error in addProduct is :${err}`);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json(products);
  } catch (err) {
    res.status(400).json(`The error in getAllProducts is :${err}`);
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json(`The error in getSingleProduct is :${err}`);
  }
};
