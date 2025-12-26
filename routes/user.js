const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const passportLocalMongoose = require("passport-local-mongoose");

const User = require("../Models/user.js");




router.get("/signup",(req,res)=>{
    res.render("user/signup.ejs")
});

router.post("/signup",wrapAsync(async(req,res)=>{
    try {
        let{username,email,password} = req.body;
        newUser = new User({email,username});
        const registeredUse = await User.register(newUser,password);
        console.log(registeredUse);
        req.login(registeredUse,(err)=>{
            if(err){
            return next(err);
            }
            req.flash("success","Welcome to WanderLust")
        res.redirect("/");
        });
    } catch (error) {
        req.flash("error",error.message);
        res.render("/signup");
    }

})
);


router.get("/login",(req,res)=>{
    res.render("user/login.ejs")
});

router.post("/login",passport.authenticate("local",{
            failureRedirect:"/login", 
            faiureFlash: true,
        }),
 async (req,res)=>{
    res.redirect("/events");
 }
);



module.exports = router;