import React, {useState} from 'react';
import "./Row.css";
import Pixel from "../Pixel/Pixel";


function Row(props) {



    const {width,background} = props;

    let pixels = [];

    for (let i = 0 ; i< width ; i++){
        pixels.push(<Pixel key={i} background={background} />);
    }

    return (
        <div className={"row"}>
            {pixels}
        </div>
    )
}


export default Row;