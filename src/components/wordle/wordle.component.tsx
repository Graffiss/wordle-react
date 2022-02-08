import React from "react";
import Alert from "../alert/alert.component";
import Keyboard from "../keyboard/keyboard.component";
import WordsGrid from "../wordsGrid/words-grid.component";

const Wordle = () => {
    return (
        <>
            <Alert />
            <WordsGrid />
            <Keyboard />
        </>
    );
};

export default Wordle;
