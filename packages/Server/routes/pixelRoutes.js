const express = require('express');
const router = express.Router()




const {
    getAllPixels,
    createPixel,
    getPixelById,
    updatePixel,
    deletePixel,
  } = require("../controllers/pixelController");

  router.route("/").get(getAllPixels).post(createPixel);

  router.route("/:id").get(getPixelById).put(updatePixel).delete(deletePixel);

module.exports = router;