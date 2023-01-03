const express = require("express");
const router = express.Router();

const {getCategoryById} = require("../controllers/category");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");


router.param("userId", getUserById);
router.param("categoryId", getCategoryById);



module.exports = router;