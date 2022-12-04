const PixelService = require("../services/PixelService");
const PixelBoardService = require("../services/pixelBoardService");
const {ObjectId} = require("mongodb");

exports.getByPosition = async (req, res) => {

    //http://localhost:8080/api/pixels/getByPosition?pbId=638b8c7a7de9dcf5eba01130&posY=4&posX=3


    const pb = await PixelBoardService.getPixelBoardById(req.query.pbId);

    //console.log(pb);
    try {

        let pixelId;

        pb.pixels.forEach(async (element, index) => {

            const pixel = await PixelService.getPixelById(element);
            //console.log(pixel);

            if (pixel.positionX == req.query.posX && pixel.positionY == req.query.posY) {

                pixelId = pixel._id;
                //console.log(element);
                //console.log(req.params.posX);
                res.json({data: element._id, status: "success"});

            }


        });

        //res.json({data: pixelId, status: "success"});


    } catch {
        res.status(404).send('NOT FOUND');

    }

};

exports.getAllPixels = async (req, res) => {
    try {
        const pixels = await PixelService.getAllPixels();
        console.log(pixels);
        res.json({data: pixels, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};


exports.createPixel = async (req, res) => {
    try {
        const pixel = await PixelService.createPixel(req.body);
        res.json({data: pixel, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.getPixelById = async (req, res) => {
    try {


        const pixel = await PixelService.getPixelById(req.params.id);

        res.json({data: pixel, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.updatePixel = async (req, res) => {
    try {
        const pixel = await PixelService.updatePixel(req.params.id, req.body);
        res.json({data: pixel.id, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

exports.deletePixel = async (req, res) => {
    try {
        const pixel = await PixelService.deletePixel(req.params.Pseudo);
        res.json({data: pixel, status: "success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};