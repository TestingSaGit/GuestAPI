//Import our model so we can us it to interact with the realated data in MongoDB
const Guest = require("../models/guest.model");

//build our controller that will have our CRUD and other methods for our users
const guestController = {
  //method to create a new guest
  createGuest: async function (req, res) {
    try {
      //store user data sent through the request
      const guest = req.body;

      
      let newGuest= await Guest.create(guest);

      //return the newly created guest
      res.status(201).json(await Guest.findById(newGuest._id));
    } catch (error) {
      //handle errors creating guest
      console.log("failed to create Guest: " + error);
      res.status(400).json({
        message: error.message,
        statusCode: res.statusCode,
      });
    }
  }
};



module.exports = guestController;
