const express = require("express");
const User = require("../models/userModel");
const {registerUser} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

//router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
//outer.post("/login", authUser);

module.exports = router;