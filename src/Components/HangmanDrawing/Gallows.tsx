import React, {FC} from 'react';
import AbsolutePosStick from "../AbsolutePosStick/AbsolutePosStick";

const baseWidth = 200
const gallowsWidth = 500
const gallowsHeight = 310
const ropeLength = gallowsHeight - 260 //should be dynamic stickman height instead of hardcoded 260px

type GallowsProps = {
    marginTop: number
    drawingStage: number
}

const Gallows:FC<GallowsProps> = ({marginTop, drawingStage}) => {
    return (
        <div>
            {/* Base */}
            {drawingStage > 0 &&
                <AbsolutePosStick rotation={90} length={baseWidth} posX={-gallowsWidth / 2 - baseWidth / 2 + 4} posY={marginTop + 1}/>}
            {drawingStage > 1 &&
                <AbsolutePosStick rotation={-90} length={baseWidth} posX={gallowsWidth / 2 + baseWidth / 2 - 4} posY={marginTop+1} />}
            {/* Support */}
            {drawingStage > 2 &&
                <AbsolutePosStick rotation={-180} length={gallowsHeight} posX={-gallowsWidth / 2} posY={marginTop} />}
            {drawingStage > 3 &&
                <AbsolutePosStick rotation={180} length={gallowsHeight} posX={gallowsWidth / 2} posY={marginTop} />}
            {/* Crossbar */}
            {drawingStage > 4 &&
                <AbsolutePosStick rotation={90} length={gallowsWidth + 8} posX={-gallowsWidth / 2 } posY={marginTop - gallowsHeight + 7} />}
            {/* Rope */}
            {drawingStage > 5 &&
                <AbsolutePosStick rotation={0} length={ropeLength} posX={0} posY={marginTop - gallowsHeight + 8} />}
        </div>
    );
};

export default Gallows;
