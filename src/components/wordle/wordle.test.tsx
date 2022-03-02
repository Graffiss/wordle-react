import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../test/test-utils";
import Wordle from "./wordle.component";
import { initialState, newGame } from "../../redux/reducers/guess.reducer";
import store from "../../redux/store";
import { GuessState } from "../../redux/reducers/guess.reducer.types";

const mockState: GuessState = {
    rows: [],
    keyboardLetterState: {},
    answer: "hello",
    gameState: "playing",
};

describe("Wordle", () => {
    test("shows one row of guesses", async () => {
        render(<Wordle />, {
            preloadedState: {
                guess: {
                    ...mockState,
                },
            },
        });

        store.dispatch(newGame([]));

        expect(screen.queryByText("Game Over")).toBeNull();
        // expect(await screen.findByText("hello")).toBeInTheDocument();
    });
});
