import React, {useState} from 'react';
import "./AdminPixelBoard.css";
import pixel from "../Pixel/Pixel";

function AdminPixelBoard() {

    const server_url = "http://localhost:8080";

    const hundleSubmitForm = async (e) => {
        e.preventDefault();

        /*Creation PixelBoard*/
        let isFinal = !document.getElementById("isFinal").checked;
        let titre = document.getElementById("title").value;
        let height = document.getElementById("height").value;
        let width = document.getElementById("width").value;
        let dateFinish = document.getElementById("dateFinish").value;


        let pixelBoard = {};
        pixelBoard.isFinished = false;
        pixelBoard.isFinal = isFinal ? isFinal : false;
        pixelBoard.titre = titre ? titre : "";
        pixelBoard.height = height ? height : 5;
        pixelBoard.width = width ? width : 5;
        pixelBoard.dateFinish = dateFinish ? dateFinish : null;


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

            pixelBoard.pixels = pixels_id;

            await fetch(server_url + '/api/pixelBoard/' + pixelBoardID, {
                method: "PUT",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(pixelBoard),
            })
        });

        /*END Creation PixelBoard*/


    }

    const changeIsFinalText = () => {
        let isFinal = document.getElementById("isFinal").checked;

        if (isFinal) {
            document.getElementById("isFinal-conclusion").innerText = "Oui";
        } else {
            document.getElementById("isFinal-conclusion").innerText = "Non";
        }
    }


    return (
        <div className={"adminPixelBoard"}>
            <h1>Enter your Dimensions</h1>

            <form onSubmit={hundleSubmitForm}>

                <div className={"field-container"}>
                    <label htmlFor="isFinal">Donnez la possibilité de re-modifier un pixel ?</label>
                    <input type="checkbox" id={"isFinal"} onChange={changeIsFinalText}/>
                    <label id={"isFinal-conclusion"}>Non</label>
                </div>
                <div className={"field-container"}>
                    <label htmlFor="title">Titre</label>
                    <input type="text" id={"title"}/>
                </div>
                <div className={"field-container"}>
                    <label htmlFor="title">Dimensions</label>
                    <input type="number" id={"height"} defaultValue={5}/>
                    <input type="number" id={"width"} defaultValue={5}/>
                </div>

                <div className={"field-container"}>
                    <input type="datetime-local" id={"dateFinish"}/>
                </div>
                <input type="submit" value="Créer un pixel board"></input>

            </form>
        </div>
    );
}

export default AdminPixelBoard;