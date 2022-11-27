import React, {useState} from 'react';
import "./Pixel.css";

function Pixel() {

    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("#f8f2f2");
    const [newColor, setNewColor] = useState("red");
    const [date, setDate] = useState();


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