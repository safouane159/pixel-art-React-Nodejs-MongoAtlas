const PixelService = require("../services/PixelService");
 
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