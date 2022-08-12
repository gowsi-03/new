const router = require("express").Router();
const {
  createProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.post(
  "/product/new",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  createProduct
);
router.get("/product", getProduct);
router.get("/product/:id", getOneProduct);
router.patch(
  "/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateProduct
);
router.delete(
  "/product/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProduct
);

module.exports = router;
