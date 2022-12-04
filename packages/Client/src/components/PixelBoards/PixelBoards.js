import React, {useEffect, useState} from 'react';
import "./PixelBoards.css";
import PixelCard from "../PixelCards/PixelCard";


function PixelBoards() {
    const server_url = "http://localhost:8080";


    const [pixelBoards, setPixelBoards] = useState([]);

    useEffect(() => {

        getListOfPB();

    }, []);

    async function getListOfPB() {


        await fetch(server_url + "/api/pixelBoard", {
            method: "GET",
        }).then(response => response.json())
            .then(response => {
                setPixelBoards(response.data)
                console.log(response.data)
            });
    }


    let pixels = [];

    for (let i = 0; i < pixelBoards.length; i++) {
        const pixel = pixelBoards[i];
        pixels.push(
            <PixelCard
                title={pixel.titre}
                isFinished={pixel.isFinished}
                isFinal={pixel.isFinal}
                dimX={pixel.width}
                dimY={pixel.height}
                finishDate={pixel.dateFinish}
                idBoard={pixel._id}
            />);
    }


    return (
        <div className={"pixelBoards"}>
            <h1>Pixel Boards created</h1>
            {pixels}
        </div>
    )
}


export default PixelBoards;