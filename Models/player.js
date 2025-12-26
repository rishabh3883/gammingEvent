const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const playerSchema = new Schema({
  gamertag: {
    type: String,
    required: true
  },
  realName: {
    type: String
  }
});


const Player = mongoose.model("Player",playerSchema);
module.exports = Player;