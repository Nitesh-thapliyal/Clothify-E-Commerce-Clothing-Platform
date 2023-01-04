const express = require("express");
const router = express.Router();


const {getProductById} = require("../controllers/product");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

// all of PARAMS
router.param("userId", getUserById);
router.param("productById", getProductById);


// all of actual ROUTES
router.get = ("/getProduct", isSignedIn, isAuthenticated, isAdmin, getProductById);


module.exports = router;