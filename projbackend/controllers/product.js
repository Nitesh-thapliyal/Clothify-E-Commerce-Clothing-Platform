const Product = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const product = require("../models/product");

exports.getProductById = (req,res, next,id) => {
    Product.findById(id)
        .populate("category")
        .exec((err, product)=>{
            if(err){
                return res.status(400).json({
                    error: "Product not found!"
             })
            }
            res.product = product;
            next();
        })
}

exports.createProduct = (req, res)=>{
    let form  = new formidable.IncomingForm();
    form.keepExtension = true;

    form.parse(req, (err, fields, file)=>{
        if(err){
            res.status(400).json({
                error: "Problem in image!"
            })
        }

        // TODO: restrictions on field
        let prodcuct = new Product(fields);

        //handle file here
        if(file.photo){
            if(file.photo.size > 3000000){
                return res.status(400).json({
                    error: "File size too big!"
                })
            }

            product.photo.data = fs.readFileSync(file.photo.path)
            product.photo.contentType = file.photo.type;
        }

        // Save to the DB
        product.save((err, product)=>{
            if(err){
                res.status(400).json({
                    error: "Saving Tshirt in DB failed!"
                })
            }
            res.json(product);
        })
    });
}