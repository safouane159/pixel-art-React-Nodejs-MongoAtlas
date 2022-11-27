import React, {useState} from 'react';
import "./Row.css";
import Pixel from "../Pixel/Pixel";


function Row(props) {


    const {positionX, width, background, isPixelOverride} = props;

    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel
            key={i}
            positionX={positionX}
            positionY={i}
            background={background}
            isPixelOverride={isPixelOverride}
        />);
    }

    return (
        <div className={"row"}>
            {pixels}
        </div>
    )
}


export default Row;