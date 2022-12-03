const PixelService = require("../services/PixelService");
const PixelBoardService = require("../services/pixelBoardService");
const { ObjectId } = require("mongodb");

exports.getByPosition = async (req, res) => {

  //http://localhost:8080/api/pixels/getByPosition?pbId=&posY=4&posX=3


  const pb = await PixelBoardService.getPixelBoardById(req.query.pbId);


try{
let isFound= false ;
  pb.pixels.forEach(  (element) => { 

if ( element.positionX == req.params.posX  && element.positionY == req.params.posY  ){

  res.json({ data: element._id, status: "success" });
isFound = true;


}
if (isFound == false){
  res.status(404).send('pixel with X ='+ req.params.posX + 'and Y = ' +req.params.posY +' Not found');
}




  });
    

}catch{
  res.status(404).send('pixelBoard with id ='+ req.params.pbId +' Not found');

}

};

exports.getAllPixels = async (req, res) => {
    try {
        const pixels = await PixelService.getAllPixels();
        console.log(pixels);
        res.json({ data: pixels, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};




exports.createPixel = async (req, res) => {
    try {
      const pixel = await PixelService.createPixel(req.body);
      res.json({ data: pixel, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.getPixelById = async (req, res) => {
    try {

        
      const pixel = await PixelService.getPixelById(req.params.id);

      res.json({ data: pixel, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.updatePixel = async (req, res) => {
    try {
      const pixel = await PixelService.updatePixel(req.params.Pseudo, req.body);
      res.json({ data: pixel.Pseudo, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.deletePixel = async (req, res) => {
    try {
      const pixel = await PixelService.deletePixel(req.params.Pseudo);
      res.json({ data: pixel, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };