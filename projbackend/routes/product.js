const express = require("express");
const router = express.Router();


const {getProductById, createProduct} = require("../controllers/product");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

// all of PARAMS
router.param("userId", getUserById);
router.param("productById", getProductById);


// all of actual ROUTES

router.post("product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);



module.exports = router;