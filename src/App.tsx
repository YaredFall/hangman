import { useState } from 'react'
import words from "./wordList.json"
import "./App.css"
import HangmanDrawing from "./Components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord";
import VirtualKeyboard from "./Components/VirtualKeyboard";

function App() {
    const [wordToGuess, setWordToGuess] = useState(words[~~(Math.random() * words.length)]);

    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    return (
    <div className="App">
        <h1 children={"HANGMAN"} />
        <h4 children={"Try to guess the word!"} />
        <HangmanDrawing />
        <HangmanWord />
        <VirtualKeyboard />
    </div>
  )
}

export default App
