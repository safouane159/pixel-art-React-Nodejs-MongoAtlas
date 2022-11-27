import React, {useState} from 'react';

import "./PixelBoard.css";
import Row from "../Row/Row";
import ColorPanel from "../ColorPanel/ColorPanel";


function PixelBoard() {


    const [width, setWidth] = useState(70);
    const [height, setHeight] = useState(16);
    const [dateCreation, setDateCreation] = useState();
    const [dateFin, setDateFin] = useState();
    const [title, setTitle] = useState("");




    let rows = [];

    for (let i = 0; i < height; i++){
        rows.push(<Row width = {width}/>)
    }





    return (
        <div className={"pixelBoard"}>
            <div className="pixelBoardColorPanel">
                <ColorPanel/>
            </div>
            <div className="pixelBoardRows">
                {rows}
            </div>

        </div>
    )

}


export default PixelBoard;