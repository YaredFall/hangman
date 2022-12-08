import React, {FC} from 'react';
import AbsolutePosStick from "../AbsolutePosStick/AbsolutePosStick";

const stoolWidth = 120
const stoolLegsLength = 44

type StoolProps = {
    marginTop: number
}

const Stool:FC<StoolProps> = ({marginTop}) => {
    return (
        <div>
            <AbsolutePosStick rotation={90} length={stoolWidth} posX={-stoolWidth / 2 + 4} posY={marginTop} />
            <AbsolutePosStick rotation={5} length={stoolLegsLength} posX={ stoolWidth / 2 - 4 -20 } posY={marginTop + 1} />
            <AbsolutePosStick rotation={-5} length={stoolLegsLength} posX={-stoolWidth / 2 + 4 + 20} posY={marginTop + 1} />
        </div>
    );
};

export default Stool;
