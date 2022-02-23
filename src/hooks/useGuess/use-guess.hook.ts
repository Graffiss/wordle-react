import React, { useEffect, useState, SetStateAction } from "react";
import { WORD_LENGTH } from "../../constants/constants";

const useGuess = (): [
    string,
    React.Dispatch<SetStateAction<string>>,
    (letter: string) => void
] => {
    const [guess, setGuess] = useState("");

    const addGuessLetter = (letter: string) => {
        setGuess((curGuess) => {
            const newGuess =
                letter.length === 1 && curGuess.length !== WORD_LENGTH
                    ? curGuess + letter
                    : curGuess;

            switch (letter) {
                case "Backspace":
                    return newGuess.slice(0, -1);
                case "Enter":
                    if (newGuess.length === WORD_LENGTH) {
                        return "";
                    }
            }

            if (newGuess.length === WORD_LENGTH) {
                return newGuess;
            }

            return newGuess;
        });
    };

    const onKeyDown = (e: KeyboardEvent) => {
        let letter = e.key;
        addGuessLetter(letter);
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("keydown", onKeyDown);
        };
    }, []);

    return [guess, setGuess, addGuessLetter];
};

export default useGuess;
