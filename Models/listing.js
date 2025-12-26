const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const RegistrationSchema = new Schema({
  teamName: {
    type: String,
    
  },
  region: {
    type: String
  },

  members: [{
     type:Schema.Types.ObjectId,
     ref:"Player"
  }] 
});


const Register = mongoose.model("Register", RegistrationSchema);
module.exports = Register;