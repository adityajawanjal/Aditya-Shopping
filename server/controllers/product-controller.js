const Product = require("../models/product-model");
const Category = require("../models/category-model");
const slugify = require("slugify");
const fs = require("fs");

exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    const product = new Product({ ...req.fields, slug: slugify(name) });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    const result = await product.save();
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json(`The error in addProduct is : ${err}`);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate("category")
      .limit(12)
      .sort({ createdAt: "-1" });
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(`The error in getAllProducts is : ${err}`);
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug }).populate(
      "category"
    );
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(`The error in getSingleProduct is : ${err}`);
  }
};

exports.getProductPhoto = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).select("photo");
    if (product.photo.data) {
      res.set("content-type", product.photo.contentType);
      res.status(200).json(product.photo.data);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(`The error in getProductPhoto is : ${err}`);
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product Deleted !");
    } else {
      res.status(400).json("Product doesn`t exists !");
    }
  } catch (err) {
    res.status(400).json(`The error in deleteProduct is : ${err}`);
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, category, quantity, shipping } =
      req.fields;
    const { photo } = req.files;
    const product = await Product.findByIdAndUpdate(req.params.id);
    if (product) {
      await Product.findByIdAndUpdate(req.params.id, {
        ...req.fields,
        slug: slugify(name),
      });
      res.status(200).json("Product Updated !");
    } else {
      res.status(400).json("Product doesn`t exists !");
    }
  } catch (err) {
    res.status(400).json(`The error in updateProduct is : ${err}`);
  }
};

exports.filterProducts = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) {
      args.category = checked;
    }
    if (radio.length) {
      args.price = { $gte: radio[0], $lte: radio[1] };
    }
    const products = await Product.find(args);
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(`The error in filterProducts is : ${err}`);
  }
};

exports.productCount = async (req, res) => {
  try {
    const totalProducts = await Product.find({}).estimatedDocumentCount();
    res.status(200).json(totalProducts);
  } catch (err) {
    res.status(400).json(`The error in productCount is : ${err}`);
  }
};

exports.productListPerPage = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const products = await Product.find({})
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: "-1" });
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(`The error in productListPerPage is : ${err}`);
  }
};

exports.searchProduct = async (req, res) => {
  try {
    const { keyword } = req.params;
    const products = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(`The error in searchProduct is : ${err}`);
  }
};

exports.similarProducts = async (req, res) => {
  try {
    const { pid, cid } = req.params;
    const products = await Product.find({
      category: cid,
      _id: { $ne: pid },
    })
      .limit(3)
      .populate("category");
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json(`The error in similarProducts is : ${err}`);
  }
};

exports.getCategoryProducts = async (req, res) => {
  try {
    const category = await Category.find({ slug: req.params.slug });
    const products = await Product.find({ category }).populate("category");
    res.status(200).json({ category, products });
  } catch (err) {
    res.status(400).json(`The error in getCategoryProducts is : ${err}`);
  }
};
