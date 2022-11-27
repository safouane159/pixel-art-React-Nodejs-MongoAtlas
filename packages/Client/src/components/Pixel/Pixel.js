import React, {useEffect, useState} from 'react';
import "./Pixel.css";

function Pixel(props) {

    /*Props*/
    const {background, positionX, positionY, isPixelOverride} = props;

    /*Pixel states*/
    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("#f8f2f2");
    const [newColor, setNewColor] = useState("fff");
    const [date, setDate] = useState();
    const [posX, setPositionX] = useState(positionX);
    const [posY, setPositionY] = useState(positionY);
    const [isOverride, setIsOverride] = useState(isPixelOverride);


    /*Change newColor from props*/
    useEffect(() => {
        setNewColor(background);
    }, [background]);


    const changePixelColor = () => {

        if (checked && !isOverride)
            return;
        setColor(newColor);
        setChecked(true);
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