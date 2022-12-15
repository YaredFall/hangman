import React, {FC, useState} from 'react';
import styles from "./HangmanWord.module.css"

type HangmanWordProps = {
    wordToGuess: string
    guessedLetters: string[]
    reveal?: boolean
}

const HangmanWord:FC<HangmanWordProps> = ({wordToGuess, guessedLetters, reveal = false}) =>{

    return (
        <div className={styles.container}>
            {[...wordToGuess].map((letter, i) =>
                <div key={i+letter}>
                    <span children={letter}
                          style={{visibility: reveal || guessedLetters.includes(letter) ? "visible" : "hidden"}}
                          className={reveal && !guessedLetters.includes(letter) ? styles.revealed : ""}
                    />
                </div>
            )}
        </div>
    );
}

export default HangmanWord;