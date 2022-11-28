import React, {useState} from 'react';
import {TwitterPicker} from 'react-color';

import "./PixelBoard.css";
import Row from "../Row/Row";


function PixelBoard() {

    /* PixelBoard States */
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(20);
    const [dateCreation, setDateCreation] = useState();
    const [dateFin, setDateFin] = useState();
    const [title, setTitle] = useState("");
    const [isPixelOverride,setIsPixelOverride] = useState(false);

    /*TwitterPicker states*/
    const [background, setBackground] = useState("#4d8fd9");
    const handleChangeComplete = (color) => {
        setBackground(color.hex);
    }


    /*Array of rows*/
    let rows = [];
    for (let i = 0; i < height; i++) {
        rows.push(<Row
            key={i}
            positionX = {i}
            width={width}
            background={background}
            isPixelOverride={isPixelOverride}
        />)
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