import React, {useEffect, useState} from 'react';
import "./PixelBoards.css";
import PixelCard from "../PixelCards/PixelCard";


function PixelBoards() {
    return (
        <div className={"pixelBoards"}>
            <PixelCard/>
            <PixelCard/>
            <PixelCard/>
            <PixelCard/>
            <PixelCard/>
            <PixelCard/>
            <PixelCard/>
        </div>
    )
}


export default PixelBoards;