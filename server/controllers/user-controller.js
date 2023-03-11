const User = require("../models/user-model");
const Order = require("../models/order-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, phone, answer, address, role } = req.body;
    if (!name || !email || !password || !answer) {
      res.status(400).json("All fields are mandatory !");
    } else {
      const userExists = await User.findOne({ email: email });
      if (!userExists) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
          name: name,
          email: email,
          password: hashedPassword,
          phone: phone,
          answer: answer,
          address: address,
          role: role,
        });
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1h",
        });
        const result = await user.save();
        res.status(201).json({ result, token });
      } else {
        res.status(400).json("User already exists !");
      }
    }
  } catch (err) {
    res.status(400).json(`The error in registerUser is ${err}`);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json("Email and Password are required.");
    } else {
      const userExists = await User.findOne({ email: email });
      if (!userExists) {
        res.status(200).json("You need to register first !");
      } else {
        const passwordMatched = await bcrypt.compare(
          password,
          userExists.password
        );
        if (!passwordMatched) {
          res.status(400).json("Incorrect Password !");
        } else {
          const token = jwt.sign(
            { _id: userExists._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1h" }
          );
          res.status(201).json(token);
        }
      }
    }
  } catch (err) {
    res.status(400).json(`The error in loginUser is ${err}`);
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      res.status(400).json("All fields are required.");
    } else {
      const userExists = await User.findOne({ email: email });
      if (!userExists) {
        res.status(400).json("You need to register first.");
      } else {
        if (answer === userExists.answer) {
          const hashedPassword = await bcrypt.hash(newPassword, 10);
          await User.findByIdAndUpdate(userExists._id, {
            password: hashedPassword,
          });
          res.status(201).json("Password Updated !");
        } else {
          res.status(400).json("Incorrect answer !");
        }
      }
    }
  } catch (err) {
    res.status(400).json(`The error in forgotPassword is ${err}`);
  }
};

exports.protectedRoute = async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    res.status(400).json(`The error in protectedRoute is ${err}`);
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email, answer, phone, address } = req.body;
    const userExists = await User.findById(req.user._id);
    if (!userExists) {
      res.status(400).json("User doesn`t Exists !");
    } else {
      await User.findByIdAndUpdate(req.user._id, {
        name: name || userExists.name,
        email: email || userExists.email,
        answer: answer || userExists.answer,
        phone: phone || userExists.phone,
        address: address || userExists.address,
      });
      res.status(201).json("Profile Updated successfully !");
    }
  } catch (err) {
    res.status(400).json(`The error in updateProfile is ${err}`);
  }
};

exports.getOrdersOfUser = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(`The error in getOrders is ${err}`);
  }
};

exports.getAllOrdersOfAllUsers = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(`The error in getOrders is ${err}`);
  }
};

exports.orderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    await Order.findByIdAndUpdate(orderId, { status: status });
    res.status(201).json("Order Status Updated !");
  } catch (err) {
    res.status(400).json(`The error in orderStatus is ${err}`);
  }
};
