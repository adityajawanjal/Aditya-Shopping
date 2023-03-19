const express = require("express");
const {
  addProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/product-controller");
const { registerUser } = require("../controllers/user-controller");
const router = express.Router();

router.post("/user", registerUser);
router.post("/product", addProduct);
router.get("/product", getAllProducts);
router.get("/product/:id", getSingleProduct);

module.exports = router;
