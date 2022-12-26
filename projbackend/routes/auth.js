var express = require('express')
var router = express.Router()
const {signout, signup, signin}  = require("../controllers/auth");
const { check } = require('express-validator');

router.post("/signup",
[
    check("name", "name should be at least 3 character!").isLength({min: 3}),
    check("email", "email is required!").isEmail(),
    check("password", "password should be atleast 2 character!").isLength({min:3}),
], signup
);

router.post("/signin",
[
    check("email", "email is required!").isEmail(),
    check("password", "password field is required!").isLength({min:3}),
],
signin
);




router.get("/signout", signout);

module.exports = router;

