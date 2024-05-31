const express = require("express");
const User = require("../models/userModel");
const {registerUser,authUser,  allUsers} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

//router.route("/").post(registerUser).get(allUsers);
//router.post("/login",authUser);
router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;