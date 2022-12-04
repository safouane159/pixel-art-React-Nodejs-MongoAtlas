import React, {useEffect, useState} from 'react';
import "./PixelBoards.css";
import PixelCard from "../PixelCards/PixelCard";


function PixelBoards() {
    const server_url = "http://localhost:8080";


    const [pixelBoards, setPixelBoards] = useState([<PixelCard/>, <PixelCard/>,]);

    useEffect(() => {

        getListOfPB();

    }, []);

    async function getListOfPB() {


        await fetch(server_url + "/api/pixelBoard", {
            method: "GET",
        }).then(response => response.json())
            .then(response => {
                console.log(response)
            });
    }


    return (
        <div className={"pixelBoards"}>
            {
                pixelBoards
            }
        </div>
    )
}


export default PixelBoards;