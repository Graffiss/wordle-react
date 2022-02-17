import React from "react";
import useGuess from "../../hooks/useGuess/use-guess.hook";
import Alert from "../alert/alert.component";
import Keyboard from "../keyboard/keyboard.component";
import WordsGrid from "../wordsGrid/words-grid.component";

const Wordle = () => {
    const [guess, setGuess, addGuessLetter] = useGuess();

    return (
        <>
            <Alert />
            <WordsGrid />
            <Keyboard
                onClick={(key) => {
                    addGuessLetter(key);
                }}
            />
        </>
    );
};

export default Wordle;
