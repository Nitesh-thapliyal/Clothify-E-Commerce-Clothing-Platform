// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

const mongoose = require('mongoose');
const crypto = require('crypto');
//import { v4 as uuidv4 } from 'uuid';
const uuidv1 = require('uuid/v1');

// const {schema} = mongoose;
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname : {
        type: String,
        maxlength: 32,
        trim: true
    },
    email : {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    userinfo:{
        type: String,
        trim: true,
    },
    encry_password:{
        type: String,
        required :true      
    },
    salt: String,
    role:{
        type: Number,
        default: 0
    },
    purchases:{
        type:Array,
        default: []
    }
},
    {timestamps:true}
);

//Virtual fields
userSchema.virtual("password")
    .set(function(password){
        this._password = password; // underscore refer to the private variable
        this.salt = uuidv1(); // populate the password
        this.encry_password = this.securePassword(password)
    })
    .get(function(){
        return this._password;
    })



//Schema method
userSchema.methods = {

    authenticate: function(plainpassword){
        return this.securePassword(plainpassword) === this.authenticate.encry_password;
    },
    securePassword: function(plainpassword){
        if(!plainpassword) return "";
        try{
            return crypto
            .createHmac('sha256', this.salt)
            .update(plainpassword)
            .digest('hex');
        }catch(err){
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema);