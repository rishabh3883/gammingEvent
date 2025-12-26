
const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const Event = require("../Models/jt.js");





router.get("/events",wrapAsync(async(req,res)=>{
    const allEvents = await Event.find({});
    res.render("listings/Events.ejs",{allEvents});
}));
router.post("/events",wrapAsync(async(req,res)=>{
    let result = EventSchema.validate(req.body);
    if(result.err){
        throw new ExpressError(400,result.err);
    }
    const newListing = new Event(req.body.event);
    newListing.save();
    console.log(req.body.event);
    res.redirect("/events")
}))
router.get("/events/new",wrapAsync(async(req,res)=>{
    res.render("listings/newEvent.ejs")
})); 

router.get("/events/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const event = await Event.findById(id);
    console.log(event);
    res.render("listings/EventD.ejs",{event})
}));

router.delete("/events/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let deletedListing =   await Event.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/events");
}));



router.get("/events/:id/register", wrapAsync(async (req, res) => {

    const { id } = req.params;
    const event = await Event.findById(id); 
    if (!event) {
        req.flash("info","There is no events")
        return res.redirect("/events");
    }
    res.render("listings/regForm.ejs", { event }); 
}));



router.post('/events/:id/register', async (req, res) => {
    let listing = await Event.findById(req.params.id);
    let newRegistration = new Register(req.body.register);
    listing.registeredTeams.push(newRegistration);
    await newRegistration.save();
    await listing.save();
    req.flash("success","registration success");
    res.redirect("/events");
});



module.exports = router;