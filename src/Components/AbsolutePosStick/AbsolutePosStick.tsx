import React, {FC} from 'react';
import styles from "./AbsolutePosStick.module.css"

export enum Orientation {
    horizontal,
    vertical
}

type AbsolutePosStickProps = {
    length: number
    rotation: number
    posX: number
    posY: number
}

const AbsolutePosStick:FC<AbsolutePosStickProps> = ({length, rotation, posX, posY }) => {

    return (
        <div className={styles.stick} style={{
            rotate: `${360 - rotation}deg`,
            height: `${length}px`,
            left: `${posX}px`,
            top: `${posY}px`
        }} />
    );
}

export default AbsolutePosStick;