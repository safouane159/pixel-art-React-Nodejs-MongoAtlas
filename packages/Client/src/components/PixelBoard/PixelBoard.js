import React, {useState} from 'react';
import {TwitterPicker} from 'react-color';

import "./PixelBoard.css";
import Row from "../Row/Row";


function PixelBoard() {

    /* PixelBoard States */
    const [width, setWidth] = useState(16);
    const [height, setHeight] = useState(16);
    const [dateCreation, setDateCreation] = useState();
    const [dateFin, setDateFin] = useState();
    const [title, setTitle] = useState("");

    /*TwitterPicker states*/
    const [background, setBackground] = useState("#4d8fd9");
    const handleChangeComplete = (color) => {
        setBackground(color.hex);
    }


    /*Array of rows*/
    let rows = [];
    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} background={background}/>)
    }


    return (
        <div className={"pixelBoard"}>
            <div className="pixelBoardColorPanel">
                <TwitterPicker
                    color={background}
                    onChangeComplete={handleChangeComplete}
                />
            </div>
            <div className="pixelBoardRows">
                {rows}
            </div>

        </div>
    )

}


export default PixelBoard;