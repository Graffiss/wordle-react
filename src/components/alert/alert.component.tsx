import { useAppSelector, useAppDispatch } from "../../redux/hooks/utils.hook";
import {
    newGame,
    selectAnswer,
    selectGameState,
} from "../../redux/reducers/guess.reducer";
import WordsGrid from "../wordsGrid/words-grid.component";
import {
    AlertWrapper,
    Answer,
    SecondaryHeading,
    Paragraph,
    Button,
} from "./alert.styled";

const Alert = () => {
    const answer = useAppSelector(selectAnswer);
    const dispatch = useAppDispatch();
    const gameState = useAppSelector(selectGameState);

    return (
        <AlertWrapper>
            <SecondaryHeading>Game Over</SecondaryHeading>
            {gameState === "won" ? (
                <Paragraph>Congrats! You won!</Paragraph>
            ) : (
                <Answer>
                    <WordsGrid word={answer} />
                </Answer>
            )}
            <Button
                onClick={() => {
                    dispatch(newGame([]));
                }}
            >
                New Game
            </Button>
        </AlertWrapper>
    );
};

export default Alert;
