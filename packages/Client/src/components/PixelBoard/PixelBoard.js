import React, {useEffect, useState} from 'react';
import {TwitterPicker} from 'react-color';

import "./PixelBoard.css";
import Row from "../Row/Row";
import {useParams} from "react-router-dom";


function PixelBoard() {

    /*Id from React Router*/
    let {id} = useParams();
    const server_url = "http://localhost:8080";


    /* PixelBoard States */
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(20);
    const [dateCreation, setDateCreation] = useState();
    const [dateFin, setDateFin] = useState();
    const [title, setTitle] = useState("");
    const [isPixelOverride, setIsPixelOverride] = useState(false);

    /*TwitterPicker states*/
    const [background, setBackground] = useState("#bec9d3");
    const handleChangeComplete = (color) => {
        setBackground(color.hex);
    }


    /*Get pixelBoard infos from DB*/

    async function getDataBoardFromAPI() {
        let response = await fetch(server_url + "/api/pixelBoard/" + id, {
            method: "GET"
        });

        let data = (await response.json()).data;

        setHeight(data.height);
        setWidth(data.width);
        setIsPixelOverride(!data.isFinal);
        //  console.log("D:> " + !data.isFinal)
        //console.log("V:> " + isPixelOverride)
        //console.log("height:> " + height)
        //console.log("width:> " + width)
    }

    useEffect(() => {
        getDataBoardFromAPI()
    }, []);


    /*Array of rows*/
    /*let rows = [];
    for (let i = 0; i < height; i++) {
        rows.push(<Row
            key={i}
            positionX={i}
            width={width}
            background={background}
            isPixelOverride={isPixelOverride}
        />)
    }*/


    return (
        <div className={"pixelBoard"}>
            <div className="pixelBoardColorPanel">
                <TwitterPicker
                    color={background}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
            <div className="pixelBoardRows">
                {
                    [...Array(height)].map((x, i) =>
                        <Row
                            key={i}
                            positionX={i}
                            width={width}
                            background={background}
                            isPixelOverride={isPixelOverride}
                            myPixelBoard={id}
                        />)
                }
            </div>

        </div>
    )

}


export default PixelBoard;