import React, {FC, useState} from 'react';
import styles from "./HangmanDrawing.module.css"
import Stickman from "./Stickman";
import Stool from "./Stool";
import Gallows from "./Gallows";

const preferredWidth = 720

const stickmanPaddingTop = 110;

type HangmanDrawingProps = {
    drawingStage: number
}

const HangmanDrawing:FC<HangmanDrawingProps> = ({drawingStage}) => {
    let scale = window.innerWidth / preferredWidth;
    if (scale > 1) scale = 1;

    const [stickmanHeight, setStickmanHeight] = useState(0);

    return (
        <div className={styles["hangman-drawing"]} style={{scale: `${scale}`, height: `${(stickmanPaddingTop + 230)*scale + 32}px`}}>
            <Stickman paddingTop={stickmanPaddingTop * scale} setStickmanHeight={setStickmanHeight} />
            <Stool marginTop={stickmanHeight} className={drawingStage > 6 ? styles.removed : ""}/>
            <Gallows marginTop={stickmanPaddingTop * scale + 230} drawingStage={drawingStage}/>
        </div>
    );
}

export default HangmanDrawing;