const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  deleteUser,
} = require("../controllers/userCtrl");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = require("express").Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.post("/password/forgot", forgotPassword);
router.post("/password/reset/:token", resetPassword);
router.get("/logout", logout);

router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin", getAllUser)
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", getSingleUser)
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", getSingleUser)
);
router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authorizeRoles("admin", deleteUser)
);

module.exports = router;
