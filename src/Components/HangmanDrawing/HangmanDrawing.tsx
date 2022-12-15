import React, {FC, useState} from 'react';
import styles from "./HangmanDrawing.module.css"
import Stickman from "./Stickman";
import Stool from "./Stool";
import Gallows from "./Gallows";

const preferredWidth = 720

const stickmanPaddingTop = 90;

type HangmanDrawingProps = {
    drawingStage: number
}

const HangmanDrawing:FC<HangmanDrawingProps> = ({drawingStage}) => {
    let scale = window.innerWidth / preferredWidth;
    if (scale > 1) scale = 1;

    const [stickmanHeight, setStickmanHeight] = useState(0);

    return (
        <div className={styles["hangman-drawing"]} style={{ height: `${(stickmanPaddingTop + 250)*scale}px`}}>
            <div style={{scale: `${scale}`}}>
                <Stickman paddingTop={stickmanPaddingTop } setStickmanHeight={setStickmanHeight} />
                <Stool marginTop={stickmanHeight} className={drawingStage > 6 ? styles.removed : ""}/>
                <Gallows marginTop={stickmanPaddingTop + 230} drawingStage={drawingStage}/>
            </div>
        </div>
    );
}

export default HangmanDrawing;