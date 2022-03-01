import { useEffect, useState } from "react";
import { NUMBER_OF_GUESSES, WORD_LENGTH } from "../../constants/constants";
import useGuess from "../../hooks/useGuess/use-guess.hook";
import usePrevious from "../../hooks/useGuess/use-previous.hook";
import { useAppSelector, useAppDispatch } from "../../redux/hooks/utils.hook";
import {
    addGuess,
    selectGameState,
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
    const gameState = useAppSelector(selectGameState);

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

    const isGameOver = gameState !== "playing";

    let rows = [...stateRows];

    let currentRow = 0;
    if (rows.length < NUMBER_OF_GUESSES) {
        currentRow = rows.push({ guess }) - 1;
    }

    const guessesRemaining = NUMBER_OF_GUESSES - rows.length;

    rows = rows.concat(Array(guessesRemaining).fill(""));

    return (
        <>
            {isGameOver && <Alert />}
            <TilesWrapper>
                {rows.map((word, index) => {
                    return (
                        <WordsGrid
                            key={index}
                            word={word.guess}
                            result={word.result}
                        />
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
