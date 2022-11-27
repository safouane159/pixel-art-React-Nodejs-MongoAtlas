const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

var mongoose = require('mongoose');
exports.getAllPixels = async () => {
   return await Pixel.find();
 };
  
 exports.createPixel = async (Pixel) => {
   return await Pixel.create(Pixel);
 };
 exports.getPixelById =  async(id) => {


   return await Pixel.findById(id );

 };
  
 exports.updatePixel = async (id, Pixel) => {
   return await Pixel.findByidAndUpdate(id, Pixel);
 };
  
 exports.deletePixel = async (id) => {
   return await Pixel.findByIdAndDelete(id);
 };