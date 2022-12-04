import React, {useEffect, useState} from 'react';
import "./Pixel.css";

function Pixel(props) {

    /*Props*/
    const {background, positionX, positionY, isPixelOverride, myPixelBoard} = props;
    const server_url = "http://localhost:8080";
    /*Pixel states*/
    const [checked, setChecked] = useState(false);
    const [color, setColor] = useState("#f8f2f2");
    const [newColor, setNewColor] = useState("fff");
    const [date, setDate] = useState();
    const [posX, setPositionX] = useState(positionX);
    const [posY, setPositionY] = useState(positionY);
    const [isOverride, setIsOverride] = useState(isPixelOverride);
    const [myId, setMyId] = useState();
    //console.log("Pixel : "+isOverride);

    /*Change newColor from props*/
    useEffect(() => {
        setNewColor(background);
    }, [background]);


    useEffect(() => {
        getMyId();
    }, []);


    const getMyId = async () => {
        await fetch(server_url + '/api/pixels/getByPosition?pbId=' + myPixelBoard + '&posY=' + posY + '&posX=' + posX, {
            method: "GET",
        }).then(response => response.json())
            .then(async response => {
                setMyId(response.data);

                /*Get Pixel Data*/
                await fetch(server_url + '/api/pixels/' + response.data, {
                    method: "GET"
                }).then(response => response.json())
                    .then(response => {
                        //console.log(response);
                        setColor(response.data.color);
                        setChecked(response.data.isChecked);
                    });


            });
    }

    const changePixelColor = async () => {

        if (checked && !isOverride)
            return;

        console.log(color);
        //setColor(newColor);
        //setChecked(true);

        let pixel = {};
        pixel.isChecked = true;
        pixel.color = newColor;
        pixel.positionX = posX;
        pixel.positionY = posY;
        pixel.pixelBoard = myPixelBoard;

        console.log(pixel);
        await fetch(server_url + "/api/pixels/" + myId, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pixel),
        }).then(() => {
            getMyId();
        });

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