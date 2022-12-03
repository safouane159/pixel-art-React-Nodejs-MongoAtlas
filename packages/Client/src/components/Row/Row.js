import React, {useState} from 'react';
import "./Row.css";
import Pixel from "../Pixel/Pixel";


function Row(props) {


    const {positionX, width, background, isPixelOverride, myPixelBoard} = props;

    let pixels = [];

    for (let i = 0; i < width; i++) {
        pixels.push(<Pixel
            key={i}
            positionX={positionX}
            positionY={i}
            background={background}
            isPixelOverride={isPixelOverride}
            myPixelBoard={myPixelBoard}
        />);
    }

    return (
        <div className={"row"}>
            {pixels}
        </div>
    )
}


export default Row;