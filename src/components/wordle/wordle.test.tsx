import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "../../test/test-utils";
import Wordle from "./wordle.component";
import { newGame } from "../../redux/reducers/guess.reducer";
import store from "../../redux/store";

describe("Wordle", () => {
    test("shows one row of guesses", () => {
        render(<Wordle />);

        store.dispatch(newGame(["hello"]));

        expect(screen.getByText("hello")).toBeInTheDocument();
    });
});
