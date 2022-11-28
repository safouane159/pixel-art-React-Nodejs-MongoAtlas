 const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

 var mongoose = require('mongoose');
 exports.getAllUsers = async () => {
    return await User.find();
  };
   
  exports.createUser = async (user) => {



    return await User.create(user);



  };
  exports.getUserById =  async(id) => {


    return await User.findById(id );

  };

   
  exports.updateUser = async (id, user) => {
    return await User.findByidAndUpdate(id, user);
  };
   


  exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };