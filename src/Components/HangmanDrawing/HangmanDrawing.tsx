import React, {useState} from 'react';
import AbsolutePosStick, {Orientation} from "../AbsolutePosStick/AbsolutePosStick";
import AbsolutePosCircle from "../AbsolutePosCircle/AbsolutePosCircle";
import styles from "./HangmanDrawing.module.css"
import Stickman from "./Stickman";
import Stool from "./Stool";
import Gallows from "./Gallows";

const stickmanPaddingTop = 150;

function HangmanDrawing() {

    const [stickmanHeight, setStickmanHeight] = useState(0);


    return (
        <div className={styles["hangman-drawing"]} style={{scale: "0.9"}}>
            <Stickman paddingTop={stickmanPaddingTop} setStickmanHeight={setStickmanHeight} />
            <Stool marginTop={stickmanHeight} />
            <Gallows marginTop={stickmanPaddingTop + 230} />
        </div>
    );
}

export default HangmanDrawing;