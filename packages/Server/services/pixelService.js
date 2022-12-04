const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

var mongoose = require('mongoose');
exports.getAllPixels = async () => {
   return await Pixel.find();
 };
  
 exports.createPixel = async (pixel) => {
   return await Pixel.create(pixel);
 };
 exports.getPixelById =  async(id) => {


   return await Pixel.findById(id );

 };
  
 exports.updatePixel = async (id, pixel) => {
   return await Pixel.findByIdAndUpdate(id, pixel);
 };
  
 exports.deletePixel = async (id) => {
   return await Pixel.findByIdAndDelete(id);
 };