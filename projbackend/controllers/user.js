const User =require("../models/user");



exports.getUserById = (req, res, next, id) =>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){
            return res.status(400).json({
                error: "No user was found in DB!"
            })
        }
        req.profile = user;
        next();
    })
};

exports.getUser = (req,res)=> {
    
    // req.profile.salt = ""; // if you want to show empty salt value to user
    req.profile.salt = undefined; // when you want to remove the salt value from the user browser
    req.profile.encry_password = undefined; 
    req.profile.createdAt = undefined; 
    req.profile.updatedAt = undefined; 
    return res.json(req.profile)
}


exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(
        {_id:req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err, user)=>{
            if(err){
                return res.status(400).json({
                    error: "Update in the database was not sucessfull!"
                }) 
            }
            user.salt = undefined; 
            user.encry_password = undefined; 
            user.createdAt = undefined; 
            user.updatedAt = undefined;
            res.json(user);
        }
    )
}




//experiment to get all the users from the database
/*exports.getAllUser = (req, res) =>{
    User.find().exec((err, users)=>{
        if(err || !users){
            return res.status(400).json({
                error: "No users are present in the DB!"
            })
        }
        res.json(users);
        
    })
}
*/