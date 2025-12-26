const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Register = require("./listing.js");

const EventSchema = new mongoose.Schema({
    EvenetName:{
        type :String,
        require:true
    },
    EntryFees:{
        type:Number,
        require:true,
    },
    FirstPrize:Number,
    SecondPrize:Number,
    ThirdPrize:Number,
    registeredTeams: [
      {
        team:{
        type:Schema.Types.ObjectId,
        ref:"Register"
       },
    },
    ]


});

const Event = mongoose.model("Event",EventSchema);
module.exports = Event;