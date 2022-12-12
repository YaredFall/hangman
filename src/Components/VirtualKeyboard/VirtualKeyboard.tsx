import React, {FC} from 'react';
import styles from "./VirtualKeyboard.module.css"

const keys = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

type VirtualKeyboardProps = {
    onKeyPress: (keyLetter: string) => void
}

const VirtualKeyboard:FC<VirtualKeyboardProps> = ({onKeyPress}) => {
    return (
        <div className={styles.keyboard}>
            {keys.map((key, i) => <button
                key={i}
                children={key}
                onClick={() => onKeyPress(key)}
            />)}
        </div>
    );
}

export default VirtualKeyboard;