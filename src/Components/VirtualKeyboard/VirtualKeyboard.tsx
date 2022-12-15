import React, {FC} from 'react';
import styles from "./VirtualKeyboard.module.css"

const keys = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");

type VirtualKeyboardProps = {
    onKeyPress: (keyLetter: string) => void
    highlightedKeys?: string[]
    inactiveKeys?: string[]
    disabled?: boolean
}

const VirtualKeyboard:FC<VirtualKeyboardProps> = ({onKeyPress, highlightedKeys, inactiveKeys, disabled = false}) => {
    return (
        <div className={styles.keyboard}>
            {keys.map((key, i) => {
                const isHighlighted = highlightedKeys ?  highlightedKeys.includes(key) : false;
                const isInactive = inactiveKeys ?  inactiveKeys.includes(key) : false;

                return <button
                    key={i}
                    className={`${isInactive ? styles.inactive : ""} ${isHighlighted ? styles.highlighted : ""}`}
                    disabled={isInactive || disabled}
                    children={key}
                    onClick={() => onKeyPress(key)}
                />
            })}
        </div>
    );
}

export default VirtualKeyboard;