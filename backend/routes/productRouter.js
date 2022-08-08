const router = require("express").Router();
const {
  createProduct,
  getProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");

router.post("/product/new", createProduct);
router.get("/product", getProduct);
router.get("/product/:id", getOneProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;
