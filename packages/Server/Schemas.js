
const  {Schema, model, mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    prenom: String,
    type: String,
    pixels: [{type:  Schema.Types.ObjectId, ref:"Pixel"}],
    pb:   {type: Schema.Types.ObjectId , ref:"pixelBoard"}
  
  });


  const pixelSchema = new mongoose.Schema({
    isChecked: Boolean,
    color: String,
    user:   {type: Schema.Types.ObjectId , ref:"User"},
    pb:   {type: Schema.Types.ObjectId , ref:"pixelBoard"}
 
  });

  const pixelBoardSchema = new mongoose.Schema({
    isFinished: Boolean,
    dateCreation: Date,
    dateFinish: Date,
    isWhite: Boolean,
    delai: Number,
    titre: String,
    hight: Number,
    width: Number,
    author:   {type: Schema.Types.ObjectId , ref:"User"},
    pixels:   [{type: Schema.Types.ObjectId , ref:"Pixel"}]
 
  });

  

  module.exports = {
    user:  mongoose.model('User', userSchema),
    pixelBoard:  mongoose.model('pixelBoard', pixelBoardSchema),
    pixel:  mongoose.model('Pixel', pixelSchema)
  }

    
