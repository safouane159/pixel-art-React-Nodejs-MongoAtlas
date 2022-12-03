import React, {useState} from 'react';
import "./AdminPixelBoard.css";
import pixel from "../Pixel/Pixel";

function AdminPixelBoard() {

    const server_url = "http://localhost:8080";

    const hundleSubmitForm = async (e) => {
        e.preventDefault();

        /*Creation PixelBoard*/
        let isFinal = document.getElementById("isFinal").checked;
        let isWhite = document.getElementById("isWhite").checked;
        let titre = document.getElementById("title").value;
        let height = document.getElementById("height").value;
        let width = document.getElementById("width").value;


        let pixelBoard = {};
        pixelBoard.isFinished = false;
        pixelBoard.isFinal = isFinal ? isFinal : false;
        pixelBoard.isWhite = isWhite ? isWhite : false;
        pixelBoard.titre = titre ? titre : "";
        pixelBoard.height = height ? height : 16;
        pixelBoard.width = width ? width : 16;


        await fetch(server_url + "/api/pixelBoard/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pixelBoard),
        }).then(r => r.json()).then(async response => {

            let pixels_id = [];
            let pixelBoardID = "";

            /*Creation Pixel Atteched to PixelBoard*/
            for (let i = 0; i < pixelBoard.width; i++) {
                for (let j = 0; j < pixelBoard.height; j++) {

                    let pixel = {};
                    pixel.color = "#f8f2f2";
                    pixel.isChecked = false;
                    pixel.positionX = i;
                    pixel.positionY = j;
                    pixel.pixelBoard = response.data._id;
                    pixelBoardID = response.data._id;


                    await fetch(server_url + "/api/pixels/", {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(pixel),
                    }).then(response => response.json()).then(response => {
                        pixels_id.push(response.data._id);
                    });

                }
            }

            return [pixels_id, pixelBoardID];
            /*END Creation Pixel Atteched to PixelBoard*/
        }).then(async (params) => {
            /*Update pixels of PixelBoard*/

            let pixels_id = params[0];
            let pixelBoardID = params[1];


            await fetch(server_url + '/api/pixelBoard/updatePixel/' + pixelBoardID, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pixels_id),
            })
        });

        /*END Creation PixelBoard*/


    }


    return (
        <div className={"adminPixelBoard"}>
            AdminPixelBoard

            <form onSubmit={hundleSubmitForm}>

                <div>
                    <label htmlFor="isFinal">isFinal</label>
                    <input type="checkbox" id={"isFinal"}/>
                </div>
                <div>
                    <label htmlFor="isWhite">isWhite</label>
                    <input type="checkbox" id={"isWhite"}/>
                </div>
                <div>
                    <label htmlFor="title">Titre</label>
                    <input type="text" id={"title"}/>
                </div>
                <div>
                    <input type="number" id={"height"} defaultValue={4}/>
                    <input type="number" id={"width"} defaultValue={4}/>
                </div>

                <button>Créer un pixel board</button>
            </form>
        </div>
    );
}

export default AdminPixelBoard;