//bring in mongoose so we can create a schema that represents the data for a User
const mongoose = require("mongoose");


//Create our schema using mongoose that contains the fields and their data types for our Users
//More info: https://mongoosejs.com/docs/schematypes.html
const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: [/.+\@.+\..+/, "Invalid E-mail Address"],
    minlength: 2,
  },
  address:{
    type: String,
    required: false,
    minlength: 2,
  },
  phone:{
    type: String,
    required: true,
    minlength: 2,
  },
  paymentMethod:{
    type: String,
    required: true,
    minlength: 2,
  }
});

const guest = mongoose.model("Guest", guestSchema);

//export our model
module.exports = guest;
