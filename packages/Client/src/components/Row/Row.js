import React, {useState} from 'react';
import "./Row.css";
import Pixel from "../Pixel/Pixel";


function Row(props) {



    const {width} = props;

    let pixels = [];

    for (let i = 0 ; i< width ; i++){
        pixels.push(<Pixel/>);
    }

    return (
        <div className={"row"}>
            {pixels}
        </div>
    )
}


export default Row;