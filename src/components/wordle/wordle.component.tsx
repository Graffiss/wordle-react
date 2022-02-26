import { useEffect, useState } from "react";
import { NUMBER_OF_GUESSES, WORD_LENGTH } from "../../constants/constants";
import useGuess from "../../hooks/useGuess/use-guess.hook";
import usePrevious from "../../hooks/useGuess/use-previous.hook";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/utils.hook";
import {
    addGuess,
    selectAnswer,
    selectGameState,
    selectKeyboardLetterState,
    selectRows,
} from "../../redux/reducers/guess.reducer";
import { isValidWord } from "../../utils/get-words";
import Alert from "../alert/alert.component";
import Keyboard from "../keyboard/keyboard.component";
import WordsGrid from "../wordsGrid/words-grid.component";
import { TilesWrapper } from "../wordsGrid/words-grid.styled";

const Wordle = () => {
    const [guess, setGuess, addGuessLetter] = useGuess();
    const [showInvalidGuess, setInvalidGuess] = useState(false);
    const dispatch = useAppDispatch();
    const stateRows = useAppSelector(selectRows);
    const answer = useAppSelector(selectAnswer);
    const gameState = useAppSelector(selectGameState);
    const keyboardLetterState = useAppSelector(selectKeyboardLetterState);

    console.log("guess:", guess);
    console.log("stateRows:", stateRows);
    console.log("showInvalidGuess:", showInvalidGuess);
    console.log("answer:", answer);
    console.log("gameState:", gameState);
    console.log("keyboardLetterState:", keyboardLetterState);

    useEffect(() => {
        let id: NodeJS.Timeout;
        if (showInvalidGuess) {
            id = setTimeout(() => setInvalidGuess(false), 1500);
        }

        return () => clearTimeout(id);
    }, [showInvalidGuess]);

    const previousGuess = usePrevious(guess);
    useEffect(() => {
        if (guess.length === 0 && previousGuess?.length === WORD_LENGTH) {
            if (isValidWord(previousGuess)) {
                setInvalidGuess(false);
                dispatch(addGuess(previousGuess));
            } else {
                setInvalidGuess(true);
                setGuess(previousGuess);
            }
        }
    }, [guess]);

    let rows = [...stateRows];

    let currentRow = 0;
    if (rows.length < NUMBER_OF_GUESSES) {
        currentRow = rows.push({ guess }) - 1;
    }

    const guessesRemaining = NUMBER_OF_GUESSES - rows.length;

    rows = rows.concat(Array(guessesRemaining).fill(""));

    return (
        <>
            <Alert />
            <TilesWrapper>
                {rows.map((word, index) => {
                    return (
                        <>
                            {console.log("Word from rows:", word)}
                            <WordsGrid
                                key={index}
                                word={word.guess}
                                result={word.result}
                            />
                        </>
                    );
                })}
            </TilesWrapper>
            <Keyboard
                onClick={(key) => {
                    addGuessLetter(key);
                }}
            />
        </>
    );
};

export default Wordle;
