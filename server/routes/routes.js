const express = require("express");
const {
  addCategory,
  updateCategory,
  getSingleCategory,
  getAllCategories,
  deleteCategory,
} = require("../controllers/category-controller");
const {
  registerUser,
  loginUser,
  forgotPassword,
  protectedRoute,
  updateProfile,
  getOrdersOfUser,
  orderStatus,
} = require("../controllers/user-controller");
const { verifyToken, admin } = require("../middlewares/auth");
const router = express.Router();

router.post("/api/v1/user/register", registerUser);
router.post("/api/v1/user/login", loginUser);
router.put("/api/v1/user/forgot-password", forgotPassword);
router.get("/api/v1/user/auth", verifyToken, protectedRoute);
router.put("/api/v1/user/update-profile", verifyToken, updateProfile);
router.get("/api/v1/user/user-orders", verifyToken, getOrdersOfUser);
router.get("/api/v1/user/all-orders", verifyToken, admin, getOrdersOfUser);
router.put(
  "/api/v1/user/order-status/:orderId",
  verifyToken,
  admin,
  orderStatus
);

router.post("/api/vi/category/", verifyToken, admin, addCategory);
router.put("/api/vi/category/:id", verifyToken, admin, updateCategory);
router.get("/api/vi/single-category/:slug", getSingleCategory);
router.get("/api/vi/all-category", getAllCategories);
router.delete("/api/vi/category/:id", verifyToken, admin, deleteCategory);

module.exports = router;
