import React, {FC} from 'react';
import AbsolutePosStick from "../AbsolutePosStick/AbsolutePosStick";

const baseWidth = 200
const gallowsWidth = 500
const gallowsHeight = 350
const ropeLength = 90

type GallowsProps = {
    marginTop: number
}

const Gallows:FC<GallowsProps> = ({marginTop}) => {
    return (
        <div>
            {/* Base */}
            <AbsolutePosStick rotation={90} length={baseWidth} posX={-gallowsWidth / 2 - baseWidth / 2 + 4} posY={marginTop+1} />
            <AbsolutePosStick rotation={-90} length={baseWidth} posX={gallowsWidth / 2 + baseWidth / 2 - 4} posY={marginTop+1} />
            {/* Support */}
            <AbsolutePosStick rotation={-180} length={gallowsHeight} posX={-gallowsWidth / 2} posY={marginTop} />
            <AbsolutePosStick rotation={180} length={gallowsHeight} posX={gallowsWidth / 2} posY={marginTop} />
            {/* Crossbar */}
            <AbsolutePosStick rotation={90} length={gallowsWidth + 8} posX={-gallowsWidth / 2 } posY={marginTop - gallowsHeight + 7} />
            {/* Rope */}
            <AbsolutePosStick rotation={0} length={ropeLength} posX={0} posY={marginTop - gallowsHeight + 8} />

        </div>
    );
};

export default Gallows;
