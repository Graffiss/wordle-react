import { LetterState } from "../../components/letter-tile/lettter-tile.types";

export interface GuessRow {
    guess: string;
    result?: LetterState[];
}

export interface GuessState {
    answer: string;
    rows: GuessRow[];
    gameState: "playing" | "won" | "lost";
    keyboardLetterState: { [letter: string]: LetterState };
    addGuess(guess: string): void;
    newGame(initialGuess?: string[]): void;
}
