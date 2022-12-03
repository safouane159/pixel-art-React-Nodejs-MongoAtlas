const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

var mongoose = require('mongoose');
exports.getAllPixelBoards = async () => {
   return await PixelBoard.find();
 };
  
 exports.createPixelBoard = async (pixelBoard) => {
   return await PixelBoard.create(pixelBoard);
 };
 exports.getPixelBoardById =  async(id) => {


   return await PixelBoard.findById(id );

 };
  
 exports.updatePixelBoard = async (id, pixelBoard) => {
   return await PixelBoard.findByidAndUpdate(id, pixelBoard);
 };

 exports.updatePixels = async (id, pixels) => {
let y = [];
  pixels.forEach(  (element) => { 
    let f = Pixel.findById(element );
 y.add(f)
    
      });
  
  let e = PixelBoard.findById(id );
  let r=[];
  r = e.pixels.concat(y);

  return await PixelBoard.findByidAndUpdate(id, {pixels : y });
};
  
 exports.deletePixelBoard = async (id) => {
   return await PixelBoard.findByIdAndDelete(id);
 };