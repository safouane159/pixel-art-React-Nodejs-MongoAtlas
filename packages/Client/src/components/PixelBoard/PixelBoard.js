import React, {useEffect, useState, useRef} from 'react';
import {TwitterPicker} from 'react-color';
import { exportComponentAsPNG, exportComponentAsJPEG } from 'react-component-export-image';
import "./PixelBoard.css";
import Row from "../Row/Row";
import {useParams} from "react-router-dom";


function PixelBoard() {

    /*Id from React Router*/
    let {id} = useParams();
    const server_url = "http://localhost:8080";
    const componentRef = useRef();


    /* PixelBoard States */
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
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

        /*Test if Pixel Board exist*/
        if(! response.ok){
            window.location = "/";
        }

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
    let rows = [];
    for (let i = 0; i < height; i++) {
        rows.push(<Row
            key={i}
            positionX={i}
            width={width}
            background={background}
            isPixelOverride={isPixelOverride}
            myPixelBoard={id}
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
            <div className="pixelBoardRows" ref={componentRef}>
                {/*
                    [...Array(height)].map((x, i) =>
                        <Row
                            key={i}
                            positionX={i}
                            width={width}
                            background={background}
                            isPixelOverride={isPixelOverride}
                            myPixelBoard={id}
                        />)
                */}
                {rows}
      
            </div>
            <div className='button-outline'>
            <button 
        
        onClick={() => exportComponentAsPNG(componentRef)}
      > Export as PNG
      </button>
      <button 
       
        onClick={() => exportComponentAsJPEG(componentRef)}
      > Export as JPG
      </button></div>
        </div>
    )

}


export default PixelBoard;