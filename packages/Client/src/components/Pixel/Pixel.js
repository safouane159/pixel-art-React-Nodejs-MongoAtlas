import React, {useEffect, useState} from 'react';
import "./Pixel.css";

function Pixel(props) {

    /*Props*/
    const {background} = props;

    /*Pixel states*/
    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("#f8f2f2");
    const [newColor, setNewColor] = useState("fff");
    const [date, setDate] = useState();
    const [positionX,setPositionX] = useState(props.positionX);
    const [positionY,setPositionY] = useState(props.positionY);


    /*Change newColor from props*/
    useEffect(() => {
        setNewColor(background);
    },[background]);


    const changePixelColor = () => {
        setColor(newColor);
    }

    return (
        <div className={"pixel"}
             style={{backgroundColor: color}}
             onClick={changePixelColor}
        >

        </div>
    )
}


export default Pixel;