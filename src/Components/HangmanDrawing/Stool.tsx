import React, {FC} from 'react';
import AbsolutePosStick from "../AbsolutePosStick/AbsolutePosStick";
import react from "@vitejs/plugin-react";

const stoolWidth = 120
const stoolLegsLength = 44

type StoolProps = {
    marginTop: number
    className: string | undefined
}

const Stool:FC<StoolProps> = ({marginTop, className}) => {
    return (
        <div className={className ?? ""}>
            <AbsolutePosStick rotation={90} length={stoolWidth} posX={-stoolWidth / 2 + 4} posY={marginTop} />
            <AbsolutePosStick rotation={5} length={stoolLegsLength} posX={ stoolWidth / 2 - 4 -20 } posY={marginTop + 1} />
            <AbsolutePosStick rotation={-5} length={stoolLegsLength} posX={-stoolWidth / 2 + 4 + 20} posY={marginTop + 1} />
        </div>
    );
};

export default Stool;
