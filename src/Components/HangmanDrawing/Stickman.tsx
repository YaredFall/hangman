import React, {FC} from 'react';
import AbsolutePosCircle from "../AbsolutePosCircle/AbsolutePosCircle";
import AbsolutePosStick from "../AbsolutePosStick/AbsolutePosStick";

const headSize = 50;
const bodyLength = 90;
const armsLength = 75;
const legsLength = 90;

type StickmanProps = {
    paddingTop: number
    setStickmanHeight: (height: number) => void
}

const Stickman:FC<StickmanProps> = ({paddingTop, setStickmanHeight}) => {
    setStickmanHeight(paddingTop + headSize / 2 + bodyLength  + legsLength * Math.cos(Math.PI/6))

    return (
        <div>
            <AbsolutePosCircle diameter={headSize} posX={0} posY={paddingTop} />
            <AbsolutePosStick rotation={0} length={bodyLength} posX={0} posY={paddingTop + headSize / 2 - 1} />
            <AbsolutePosStick rotation={45} length={armsLength} posX={0} posY={paddingTop + headSize / 2 + 12} />
            <AbsolutePosStick rotation={-45} length={armsLength} posX={0} posY={paddingTop + headSize / 2 + 12} />
            <AbsolutePosStick rotation={30} length={legsLength} posX={1} posY={paddingTop + headSize / 2 + bodyLength - 2} />
            <AbsolutePosStick rotation={-30} length={legsLength} posX={-1} posY={paddingTop + headSize / 2 + bodyLength - 2} />
        </div>
    );
};

export default Stickman;
