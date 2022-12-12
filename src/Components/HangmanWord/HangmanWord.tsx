import React, {FC, useState} from 'react';
import styles from "./HangmanWord.module.css"

type HangmanWordProps = {
    wordToGuess: string
    guessedLetters: string[]
}

const HangmanWord:FC<HangmanWordProps> = ({wordToGuess, guessedLetters}) =>{

    return (
        <div className={styles.container}>
            {[...wordToGuess].map((letter, i) =>
                <div key={i+letter}>
                    <span children={letter} style={{
                        visibility: guessedLetters.includes(letter) ? "visible" : "hidden"
                    }}/>
                </div>
            )}
        </div>
    );
}

export default HangmanWord;