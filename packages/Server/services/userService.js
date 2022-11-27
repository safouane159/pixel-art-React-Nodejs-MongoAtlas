 const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

 var mongoose = require('mongoose');
 exports.getAllUsers = async () => {
    return await User.find();
  };
   
  exports.createUser = async (User) => {
    return await User.create(User);
  };
  exports.getUserById =  async(id) => {


    return await User.findById(id );

  };
   
  exports.updateUser = async (id, User) => {
    return await User.findByidAndUpdate(id, User);
  };
   
  exports.deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
  };