const {Schema, model, mongoose} = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    pseudo: { type: String, unique: true }, 
    type: String,
    
  password: { type: String },
  token: { type: String },
    pixels: [{type: Schema.Types.ObjectId, ref: "Pixel"}],
    pixelBoard: {type: Schema.Types.ObjectId, ref: "PixelBoard"}

});


const pixelSchema = new mongoose.Schema({
    isChecked: Boolean,
    color: String,
    positionX: Number,
    positionY: Number,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    pixelBoard: {type: Schema.Types.ObjectId, ref: "PixelBoard"}
});

const pixelBoardSchema = new mongoose.Schema({
    isFinished: Boolean,
    isFinal: Boolean,
    dateCreation: Date,
    dateFinish: Date,
    isWhite: Boolean,
    delay: Number,
    titre: String,
    height: Number,
    width: Number,
    author: {type: Schema.Types.ObjectId, ref: "User"},
    pixels: [{type: Schema.Types.ObjectId, ref: "Pixel"}]
});


module.exports = {
    User: mongoose.model('User', userSchema),
    PixelBoard: mongoose.model('PixelBoard', pixelBoardSchema),
    Pixel: mongoose.model('Pixel', pixelSchema)
}

    
