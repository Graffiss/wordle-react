import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../test/test-utils";
import Wordle from "./wordle.component";
import { newGame } from "../../redux/reducers/guess.reducer";
import store from "../../redux/store";
import { GuessState } from "../../redux/reducers/guess.reducer.types";

const mockState: GuessState = {
    rows: [],
    keyboardLetterState: {},
    answer: "hello",
    gameState: "playing",
};

describe("Wordle", () => {
    test("game is not over when word is provided", async () => {
        render(<Wordle />, {
            preloadedState: {
                guess: {
                    ...mockState,
                },
            },
        });

        store.dispatch(newGame(["hello"]));

        expect(screen.queryByText("Game Over")).toBeNull();
    });
});
