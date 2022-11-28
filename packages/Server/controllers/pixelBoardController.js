const PixelBoardService = require("../services/pixelBoardService");
 
exports.getAllPixelBoards = async (req, res) => {
    try {
        const pixelBoards = await PixelBoardService.getAllPixelBoards();
        console.log(pixelBoards);
        res.json({ data: pixelBoards, status: "success" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
 
exports.createPixelBoard = async (req, res) => {

  
    try {
      const pixelBoard = await PixelBoardService.createPixelBoard(req.body);
      res.json({ data: pixelBoard, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  exports.getPixelBoardById = async (req, res) => {
    try {

        
      const pixelBoard = await PixelBoardService.getPixelBoardById(req.params.id);

      res.json({ data: pixelBoard, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.updatePixelBoard = async (req, res) => {
    try {
      const pixelBoard = await PixelBoardService.updatePixelBoard(req.params.Pseudo, req.body);
      res.json({ data: pixelBoard.Pseudo, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
   
  exports.deletePixelBoard = async (req, res) => {
    try {
      const pixelBoard = await PixelBoardService.deletePixelBoard(req.params.Pseudo);
      res.json({ data: pixelBoard, status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };