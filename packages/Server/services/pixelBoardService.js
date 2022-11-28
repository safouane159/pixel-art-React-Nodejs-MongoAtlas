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
  
 exports.deletePixelBoard = async (id) => {
   return await PixelBoard.findByIdAndDelete(id);
 };