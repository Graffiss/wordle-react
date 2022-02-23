import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getWord } from "../../utils/get-words"
import type { AppState } from "../store"
import { GuessState } from "./guess.reducer.types"

const initialState: GuessState = {
  answer: getWord(),
  rows: [],
  gameState: "playing",
  keyboardLetterState: {},
  addGuess: () => void,
  newGame: () => void
}

export const guessSlice = createSlice({
  name: "guess",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload
    },
  },
})

export const { setAnswer } = guessSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAnswer = (state: AppState) => state.guess.answer;

export default guessSlice.reducer