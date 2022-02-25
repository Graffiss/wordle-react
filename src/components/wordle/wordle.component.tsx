import { useEffect, useState } from "react";
import { NUMBER_OF_GUESSES } from "../../constants/constants";
import useGuess from "../../hooks/useGuess/use-guess.hook";
import usePrevious from "../../hooks/useGuess/use-previous.hook";
import { useAppSelector } from "../../redux/hooks/utils.hook";
import { selectRows } from "../../redux/reducers/guess.reducer";
import Alert from "../alert/alert.component";
import Keyboard from "../keyboard/keyboard.component";
import WordsGrid from "../wordsGrid/words-grid.component";
import { TilesWrapper } from "../wordsGrid/words-grid.styled";

const Wordle = () => {
    const [guess, setGuess, addGuessLetter] = useGuess();
    const [showInvalidGuess, setInvalidGuess] = useState(false);
    const stateRows = useAppSelector(selectRows);

    useEffect(() => {
        let id: NodeJS.Timeout;
        if (showInvalidGuess) {
            id = setTimeout(() => setInvalidGuess(false), 1500);
        }

        return () => clearTimeout(id);
    }, [showInvalidGuess]);

    const previousGuess = usePrevious(guess);

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
                {rows.map((word, index) => (
                    <WordsGrid
                        key={index}
                        word={word.guess}
                        result={word.result}
                    />
                ))}
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
