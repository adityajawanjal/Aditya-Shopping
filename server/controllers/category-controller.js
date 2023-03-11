const Category = require("../models/category-model");
const slugify = require("slugify");

exports.addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const nameExists = await Category.findOne({ name: name });
    if (nameExists) {
      res.status(400).json("Category already Exists !");
    } else {
      const category = new Category({
        name: name,
        slug: slugify(name),
      });
      await category.save();
      res.status(201).json("Category Created !");
    }
  } catch (err) {
    res.status(400).json(`The error in addCategory is : ${err}`);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await Category.findById(id);
    if (!category) {
      res.status(400).json("No such category !");
    } else {
      await Category.findByIdAndUpdate(id, { name: name, slug: slugify(name) });
      res.status(201).json("Category name updated !");
    }
  } catch (err) {
    res.status(400).json(`The error in updateCategory is : ${err}`);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json(`The error in getAllCategories is : ${err}`);
  }
};

exports.getSingleCategory = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await Category.findOne({ slug: slug });
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(400).json("No such category !");
    }
  } catch (err) {
    res.status(400).json(`The error in getSingleCategory is : ${err}`);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id });
    if (category) {
      await Category.findByIdAndDelete(id);
      res.status(200).json("category deleted.");
    } else {
      res.status(400).json("No such category !");
    }
  } catch (err) {
    res.status(400).json(`The error in deleteCategory is : ${err}`);
  }
};
