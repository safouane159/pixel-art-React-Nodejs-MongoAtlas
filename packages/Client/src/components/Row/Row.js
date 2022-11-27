import React, {useState} from 'react';
import "./Row.css";
import Pixel from "../Pixel/Pixel";


function Row(props) {



    const {positionX,width,background} = props;

    let pixels = [];

    for (let i = 0 ; i< width ; i++){
        pixels.push(<Pixel positionX={positionX} positionY={i} key={i} background={background} />);
    }

    return (
        <div className={"row"}>
            {pixels}
        </div>
    )
}


export default Row;