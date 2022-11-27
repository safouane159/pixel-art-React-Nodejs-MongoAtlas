const {User, Pixel, PixelBoard}  = require("../models/Schemas.js");

var mongoose = require('mongoose');
exports.getAllPixelBoards = async () => {
   return await PixelBoard.find();
 };
  
 exports.createPixelBoard = async (PixelBoard) => {
   return await PixelBoard.create(PixelBoard);
 };
 exports.getPixelBoardById =  async(id) => {


   return await PixelBoard.findById(id );

 };
  
 exports.updatePixelBoard = async (id, PixelBoard) => {
   return await PixelBoard.findByidAndUpdate(id, PixelBoard);
 };
  
 exports.deletePixelBoard = async (id) => {
   return await PixelBoard.findByIdAndDelete(id);
 };