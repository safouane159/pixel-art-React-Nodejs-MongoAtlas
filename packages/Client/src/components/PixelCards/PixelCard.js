import React, {useEffect, useState} from 'react';
import "./PixelCard.css"


function PixelCard(props) {

    const {title, isFinished, isFinal, createDate, finishDate, dimX, dimY, idBoard} = props;

    const [timer, setTimer] = useState("");


    function diff_hours(deadline) {
        const time = Date.parse(deadline) - Date.now();
        let days = Math.floor(time / (1000 * 60 * 60 * 24));
        let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((time / 1000 / 60) % 60);
        let secondes = Math.floor((time / 1000) % 60);

        setTimer(days + " days " + hours + "h " + minutes + "m " + secondes + "s");
    }


    useEffect(() => {
        setInterval(() => {
                diff_hours(new Date(finishDate));
            }
            , 1000);
    }, []);


    return (
        <div className={"pb-card"}>
            <div>Title : {title}</div>
            <div>Date creation</div>
            <div>Dimension : {dimX} X {dimY}</div>
            <div>Overrider un pixel : {isFinal ? "True" : "False"}</div>
            <div>Status: {(isFinished) ? "Completed" : "In creating ..."}</div>

            <div>Temps restant : {timer} </div>

            <a href={"/pb/" + idBoard}>Jouer</a>

        </div>
    );
}


export default PixelCard;