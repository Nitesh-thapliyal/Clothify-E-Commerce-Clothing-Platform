const express = require("express");
const router = express.Router();

const {getUserById, getUser, updateUser,userPurchaseList} = require("../controllers/user");
const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");

// getUserById will populate user.profile
// when there will something in route with :(colon) it will be treated as a id and this method will automatically populate the user.profile comming from the database

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);


module.exports = router;


/*
router.get("/users", getAllUser); //experiment
*/


