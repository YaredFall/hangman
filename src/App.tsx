import { useState } from 'react'
import words from "./wordList.json"
import "./App.css"
import HangmanDrawing from "./Components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord/HangmanWord";
import VirtualKeyboard from "./Components/VirtualKeyboard/VirtualKeyboard";

function App() {
    const [wordToGuess, setWordToGuess] = useState(words[~~(Math.random() * words.length)]);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const addLetterToGuessed = (letter: string) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter])
        }
    }

    const incorrectGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter)).length;
    return (
    <div className="App">
        <h1 children={"HANGMAN"} />
        <h4 children={"Try to guess the word!"} />
        <HangmanDrawing drawingStage={incorrectGuesses}/>
        <HangmanWord wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
        <VirtualKeyboard onKeyPress={addLetterToGuessed} />
    </div>
  )
}

export default App
