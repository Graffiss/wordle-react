import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LetterState } from "../../components/letter-tile/lettter-tile.types";
import { NUMBER_OF_GUESSES } from "../../constants/constants";
import { calculateGuess } from "../../utils/calculate-guess";
import { getWord } from "../../utils/get-words";
import type { AppState } from "../store";
import { GuessState } from "./guess.reducer.types";

const initialState: GuessState = {
    answer: getWord(),
    rows: [],
    gameState: "playing",
    keyboardLetterState: {},
};

interface Guess {
    guess: string;
}

export const guessSlice = createSlice({
    name: "guess",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        // setGameState: (state, action: PayloadAction<string>) => {

        // },
        addGuess: (state, action: PayloadAction<any>) => {
            // state.rows = [...state.rows, action.payload];
            const result = calculateGuess(action.payload, state.answer);

            const rows = state.rows.concat({
                guess: action.payload,
                result,
            });

            const didWin = result.every((r) => r === LetterState.Match);

            const keyboardLetterState = state.keyboardLetterState;
            result.forEach((r, index) => {
                const resultGuessLetter = action.payload[index];

                const currentLetterState =
                    keyboardLetterState[resultGuessLetter];
                switch (currentLetterState) {
                    case LetterState.Match:
                        break;
                    case LetterState.Present:
                        if (r === LetterState.Miss) {
                            break;
                        }
                        keyboardLetterState[resultGuessLetter] = r;
                        break;
                    default:
                        keyboardLetterState[resultGuessLetter] = r;
                        break;
                }
            });

            state.rows = rows;
            state.keyboardLetterState = keyboardLetterState;
            state.gameState = didWin
                ? "won"
                : state.rows.length === NUMBER_OF_GUESSES
                ? "lost"
                : "playing";

            // return {
            //     answer: getWord(),
            //     rows: [],
            //     gameState: "playing",
            //     keyboardLetterState: {},
            //     addGuess: this,
            //     newGame(initialRows = []) {
            //         ({
            //             gameState: "playing",
            //             answer: getWord(),
            //             rows: [],
            //             keyboardLetterState: {},
            //         });

            //         initialRows.forEach(this.addGuess);
            //     },
            // };
        },
        newGame: (state) => {
            state.gameState = "playing";
            state.answer = getWord();
            state.rows = [];
            state.keyboardLetterState = {};
            // action.payload.forEach(addGuess);
        },
    },
});

export const { addGuess, newGame } = guessSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAnswer = (state: AppState) => state.guess.answer;
export const selectRows = (state: AppState) => state.guess.rows;
export const selectGameState = (state: AppState) => state.guess.gameState;
export const selectKeyboardLetterState = (state: AppState) =>
    state.guess.keyboardLetterState;

export default guessSlice.reducer;
