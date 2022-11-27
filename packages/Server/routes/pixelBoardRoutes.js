const express = require('express');
const router = express.Router()




const {
    getAllPixelBoards,
    createPixelBoard,
    getPixelBoardById,
    updatePixelBoard,
    deletePixelBoard,
  } = require("../controllers/pixelBoardController");

  router.route("/").get(getAllPixelBoards).post(createPixelBoard);

  router.route("/:id").get(getPixelBoardById).put(updatePixelBoard).delete(deletePixelBoard);

module.exports = router;