import React, {FC} from 'react';
import styles from "./AbsolutePosCircle.module.css"

type AbsolutePosCircleProps = {
    diameter: number
    posX: number
    posY: number
}

const AbsolutePosCircle:FC<AbsolutePosCircleProps> = ({diameter, posX, posY}) => {
    return (
        <div className={styles.circle} style={{
            width: `${diameter}px`,
            left: `${posX}px`,
            top: `${posY}px`
        }} />
    );
}

export default AbsolutePosCircle;