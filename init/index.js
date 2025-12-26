
const mongoose = require("mongoose");
const intitData = require("./data.js");
const Listing = require("../Models/listing.js");
const Event =require("../Models/jt.js");

main().then(() => {
    console.log("connected to db");
}).catch(err =>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/GammerTeam");
}

const initDB = async() => {
    await Event.deleteMany({});
    await Event.insertMany(intitData.data);
    console.log("data was initlized");
};

initDB();

