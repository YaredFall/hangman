import {useCallback, useEffect, useState} from 'react'
import words from "./wordList.json"
import "./App.css"
import HangmanDrawing from "./Components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord/HangmanWord";
import VirtualKeyboard from "./Components/VirtualKeyboard/VirtualKeyboard";

function App() {
    const [wordToGuess, setWordToGuess] = useState(words[~~(Math.random() * words.length)]);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter));
    const incorrectGuessesCount = incorrectGuesses.length;
    const isLose = incorrectGuessesCount >= 7;
    const isWon = [...wordToGuess].every(l => guessedLetters.includes(l))

    const addLetterToGuessed = useCallback((letter: string) => {
        if (guessedLetters.includes(letter) || isLose || isWon) return

        setGuessedLetters([...guessedLetters, letter])

    }, [guessedLetters, isLose, isWon])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (!e.key.match(/^[a-z]$/)) return

            e.preventDefault();
            addLetterToGuessed(e.key);

        }
        document.addEventListener("keypress", handler);

        return () => {
            document.removeEventListener("keypress", handler);
        };
    }, [guessedLetters]);


    return (
    <div className="App">
        <h1 children={"HANGMAN"} />
        <h4 children={
            isWon ? "You did it!" :
                isLose ? "Nope! Better luck next time!" :
                    "Try to guess the word!"
        } />
        <HangmanDrawing drawingStage={incorrectGuessesCount}/>
        <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} reveal={isLose} />
        <VirtualKeyboard onKeyPress={addLetterToGuessed}
                         highlightedKeys={guessedLetters.filter(l => !incorrectGuesses.includes(l))}
                         inactiveKeys={guessedLetters}
                         disabled={isLose || isWon}
        />
    </div>
  )
}

export default App
