import React, {FC, useState} from 'react';
import styles from "./HangmanDrawing.module.css"
import Stickman from "./Stickman";
import Stool from "./Stool";
import Gallows from "./Gallows";

const scale = 1;
const stickmanPaddingTop = 140;


type HangmanDrawingProps = {
    drawingStage: number
}

const HangmanDrawing:FC<HangmanDrawingProps> = ({drawingStage}) => {

    const [stickmanHeight, setStickmanHeight] = useState(0);

    return (
        <div className={styles["hangman-drawing"]} style={{scale: `${scale}`, height: `${(stickmanPaddingTop + 230)*scale + 40}px`}}>
            <Stickman paddingTop={stickmanPaddingTop * scale} setStickmanHeight={setStickmanHeight} />
            <Stool marginTop={stickmanHeight} className={drawingStage > 6 ? styles.removed : ""}/>
            <Gallows marginTop={stickmanPaddingTop * scale + 230} drawingStage={drawingStage}/>
        </div>
    );
}

export default HangmanDrawing;