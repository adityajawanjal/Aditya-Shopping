const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

exports.verifyToken = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization || req.headers.Authorization,
      process.env.JWT_SECRET_KEY
    );
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(400).json("Error in decoding token.");
    }
  } catch (err) {
    res.status(400).json(`The error in verifyToken is : ${err}`);
  }
};

exports.admin = async (req, res, next) => {
  try {
    const isAdmin = await User.findById(req.user._id);
    if (isAdmin.role !== 1) {
      res.status(400).json("User is Not Admin !");
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json(`The error in admin is : ${err}`);
  }
};
