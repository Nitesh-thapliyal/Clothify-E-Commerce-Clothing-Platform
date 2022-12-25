var express = require('express')
var router = express.Router()
const {signout, signup}  = require("../controllers/auth");
const { check } = require('express-validator');

router.post("/signup",[
    check("name", "name should be at least 3 character!").isLength({min: 3}),
    check("email", "email is required!").isEmail(),
    check("password", "password should be atleast 2 character!").isLength({min:3}),
],  signup);
router.get("/signout", signout);

module.exports = router;

